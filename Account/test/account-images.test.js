import { getAccountImages } from '../main/cases/account-images';

let response;

describe('Fetch_AccountImages', () => {

    it('should return valid account images response', async () => {
        response = await getAccountImages();
        expect(response.status).toBe(200);
    });

});

