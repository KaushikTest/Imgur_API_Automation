import { getResponse, readImgurAccessToken } from "../../../Commons/helper-files";
import { HttpRequestBuilder } from "../../../Commons/https-request-builder";
import { BASE_URL, UPDATE_ACCOUNT_SETTINGS_PATH } from "../../../Commons/url-path";

let request, response;
export async function updateAccountSettings() {
    const form={
        bio: 'This is a test bio',
        public_images: false,
        messaging_enabled: false,
        album_privacy: 'hidden',
        accepted_gallery_terms: false,
        username: 'kaushik6test',
        show_mature: false,
        newsletter_subscribed: false,
        avatar: 'https://i.imgur.com/1q2JZqo.jpg'

    }
    request = new HttpRequestBuilder().setURL(BASE_URL).setPath(UPDATE_ACCOUNT_SETTINGS_PATH).setMethod('PUT').setField(form).setHeaders({ Authorization: `Bearer ` + readImgurAccessToken(), 'Content-Type': 'multipart/form-data' }).build();
    response = await getResponse(request);
    return response;
}