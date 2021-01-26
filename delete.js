
import handler from "./libs/handler-lib";
import dbConn from './config/db.config';


//export async function main(event, context) {
export const main = handler(async (event, context) => {
    return new Promise((resolve, reject) => {
        dbConn.query('DELETE FROM notes WHERE id=? AND user_id=?', [event.pathParameters.id, 1], function (error, results, fields) {
            dbConn.end();
            return error ? reject(error) : resolve(results);
        });
    });
});