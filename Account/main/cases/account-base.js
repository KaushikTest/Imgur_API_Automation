import { getResponse } from "../../../Commons/helper-files";
import { HttpRequestBuilder } from "../../../Commons/https-request-builder";
import { ACCOUNT_BASE_PATH, BASE_URL } from "../../../Commons/url-path";
require('dotenv').config();

let request, response;

export async function getAccountBase() {
    request = new HttpRequestBuilder().setURL(BASE_URL).setPath(ACCOUNT_BASE_PATH + '/' + process.env.IMGURUSERNAME).setMethod('GET').setHeaders({ 'Authorization': 'Client-ID ' + process.env.CLIENT_ID, 'Content-Type': 'multipart/form-data' }).build();
    response = await getResponse(request);
    return response;
}