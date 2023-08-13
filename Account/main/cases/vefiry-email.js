import { getResponse, readImgurAccessToken } from "../../../Commons/helper-files";
import { HttpRequestBuilder } from "../../../Commons/https-request-builder";
import { BASE_URL, VERIFY_EMAIL_PATH } from "../../../Commons/url-path";

let request, response;
export async function verifyEmail() {
    request = new HttpRequestBuilder().setURL(BASE_URL).setPath(VERIFY_EMAIL_PATH).setMethod('GET').setHeaders({ Authorization: `Bearer ` + readImgurAccessToken() }).build();
    response = await getResponse(request);
    return response;
}