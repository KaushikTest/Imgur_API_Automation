import { getResponse, readImgurAccessToken } from "../../../Commons/helper-files";
import { HttpRequestBuilder } from "../../../Commons/https-request-builder";
import { ACCOUNT_AVATAR_PATH, BASE_URL } from "../../../Commons/url-path";


let request, response;
export async function getAccountAvatar() {
    request = new HttpRequestBuilder().setURL(BASE_URL).setPath(ACCOUNT_AVATAR_PATH).setMethod('GET').setHeaders({ Authorization: `Bearer ` + readImgurAccessToken() }).build();
    response = await getResponse(request);
    return response;

}