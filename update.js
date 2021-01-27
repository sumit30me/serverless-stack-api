
import handler from "./libs/handler-lib";
import dbConn from './config/db.config';


//export async function main(event, context) {
export const main = handler(async (event, context) => {
    // Request body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);

    return new Promise((resolve, reject) => {
        dbConn.query('UPDATE notes SET content=?, attachment=?, modified_at=now() WHERE id=? AND user_id=?', [data.content, data.attachment, event.pathParameters.id, event.requestContext.identity.cognitoIdentityId], function (error, results, fields) {
            dbConn.end();
            return error ? reject(error) : resolve(results);
        });
    });
});