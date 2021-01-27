//import AWS from "aws-sdk";
import * as uuid from 'uuid';
import handler from "./libs/handler-lib";
import dbConn from './config/db.config';


//export async function main(event, context) {
export const main = handler(async (event, context) => {
    // Request body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);
    var note = {
        // The attributes of the item to be created
        id: uuid.v1(),
        user_id: event.requestContext.identity.cognitoIdentityId, // The id of the author
        content: data.content, // Parsed from request body
        attachment: data.attachment, // Parsed from request body
    };
    /*try {
        dbConn.query('INSERT INTO notes SET ?', note, function (error, results, fields) {
            if (error) throw error;
        });
        dbConn.end();
        return {
            statusCode: 200,
            body: JSON.stringify(note),
        };
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: e.message }),
      };
    }*/
    return new Promise((resolve, reject) => {
        dbConn.query('INSERT INTO notes SET ?', note, function (error, results, fields) {
            dbConn.end();
            return error ? reject(error) : resolve(note);
        });
    });
//}
});