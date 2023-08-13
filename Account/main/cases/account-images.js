import { getResponse, readImgurAccessToken } from "../../../Commons/helper-files";
import { HttpRequestBuilder } from "../../../Commons/https-request-builder";
import { ACCOUNT_IMAGES_PATH, BASE_URL } from "../../../Commons/url-path";

let request,response;

export async function getAccountImages(){
    request=new HttpRequestBuilder().setURL(BASE_URL).setPath(ACCOUNT_IMAGES_PATH).setMethod('GET').setHeaders({Authorization: `Bearer `+readImgurAccessToken()}).build();
    response=await getResponse(request);
    return response;
}