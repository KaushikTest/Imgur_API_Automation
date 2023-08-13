import {updateAccountSettings} from '../main/cases/update-account-settings';

let response;
describe('Update_AccountSettings', () => {

    it('should return valid account settings response', async () => {
        response = await updateAccountSettings();
        expect(response.status).toBe(200);
        expect(response.body.success).toBeTruthy();
        expect(response.body.status).toBe(200);
    })
});