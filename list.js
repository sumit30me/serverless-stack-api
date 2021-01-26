import handler from "./libs/handler-lib";
import dbConn from './config/db.config';


export const main = handler(async (event, context) => {
    return new Promise((resolve, reject) => {
        dbConn.query('SELECT * FROM notes WHERE user_id = ?', [1], function (error, results, fields) {
            console.log(results);
            if (results.length === 0) {
                reject("Note not found.");
            }
            dbConn.end();
            return error ? reject(error) : resolve(results);
        });
    });
});