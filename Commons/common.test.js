import {getImgurAccessToken} from './getAccessToken';

describe('Commons', () => {

    it('should return a valid access token', async () => {

        let accessToken = await getImgurAccessToken();
        expect(accessToken).not.toBeNull();
        expect(accessToken).not.toBeUndefined();
    });
});