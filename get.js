import handler from "./libs/handler-lib";
import dbConn from './config/db.config';


export const main = handler(async (event, context) => {
    /*dbConn.query('SELECT * FROM notes WHERE id = ? AND user_id = ?', [event.pathParameters.id, 1], function (error, results, fields) {
        if (error) throw error;
        console.log(results[0].id);
        return results[0];
    });*/
    return new Promise((resolve, reject) => {
        dbConn.query('SELECT * FROM notes WHERE id = ? AND user_id = ?', [event.pathParameters.id, event.requestContext.identity.cognitoIdentityId], function (error, results, fields) {
            if (results.length === 0) {
                reject("Note not found.");
            }
            dbConn.end();
            return error ? reject(error) : resolve(results[0]);
        });
    });
});