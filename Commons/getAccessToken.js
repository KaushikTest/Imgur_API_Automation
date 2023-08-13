
import { BASE_URL, TOKEN_PATH } from './url-path';
import { HttpRequestBuilder } from '../Commons/https-request-builder';
import fs from 'fs';
import { getResponse } from './helper-files';
require('dotenv').config();
let request;
let response;
export async function getImgurAccessToken() {
    let form = {
        'refresh_token': process.env.REFRESH_TOKEN,
        'client_id': process.env.CLIENT_ID,
        'client_secret': process.env.CLIENT_SECRET,
        'grant_type': 'refresh_token'
    };
    request = new HttpRequestBuilder().setURL(BASE_URL).setPath(TOKEN_PATH).setMethod('POST').setField(form).setHeaders({ 'Content-Type': 'multipart/form-data' }).build();
    response = await getResponse(request);
    //write this access token to a text file called token.txt
    fs.writeFileSync('token/token.txt', response.body.access_token);
    return response.body.access_token;

}