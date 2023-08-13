import { getAccountSettings } from '../main/cases/account-settings';

let response;
describe('Fetch_AccountSettings', () => {

    it('should return valid account settings response', async () => {
        response = await getAccountSettings();
        expect(response.status).toBe(200);
        expect(response.body.success).toBeTruthy();
        expect(response.body.status).toBe(200);
    })
});