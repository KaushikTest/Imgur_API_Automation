import { getAccountAvatar } from '../main/cases/account-avatar';

let response;
describe('Fetch_AccountAvatar', () => {

    it('should return valid account avatar response', async () => {
        response = await getAccountAvatar();
        expect(response.status).toBe(200);
        expect(response.body.success).toBeTruthy();
        expect(response.body.status).toBe(200);
    })
});