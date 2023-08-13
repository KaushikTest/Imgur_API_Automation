import { getAccountAvailableAvatars } from '../main/cases/account-available-avatars';


let response;

describe('Fetch_AccountAvailableAvatar', () => {

    it('should return valid account available avatar response', async () => {
        response = await getAccountAvailableAvatars();
        expect(response.status).toBe(200);
        expect(response.body.data.available_avatars_count).toEqual(159);
        expect(response.body.success).toBeTruthy();
        expect(response.body.status).toBe(200);
    });

});