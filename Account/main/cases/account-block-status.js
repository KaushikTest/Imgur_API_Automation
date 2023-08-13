import { getResponse, readImgurAccessToken } from "../../../Commons/helper-files";
import { HttpRequestBuilder } from "../../../Commons/https-request-builder";
import { ACCOUNT_BLOCK_STATUS_PATH, BASE_URL } from "../../../Commons/url-path";

let request,response;

export async function getAccountBlockStatus(){
    request=new HttpRequestBuilder().setURL(BASE_URL).setPath(ACCOUNT_BLOCK_STATUS_PATH).setMethod('GET').setHeaders({Authorization: `Bearer `+readImgurAccessToken()}).build();
    response=await getResponse(request);
    return response;
}