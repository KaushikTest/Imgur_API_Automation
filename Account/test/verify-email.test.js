import { verifyEmail } from '../main/cases/vefiry-email'


let response;
describe('Verify Email', () => {

    it('should verify email', async () => {
        response = await verifyEmail();
        expect(response.status).toEqual(200);
        expect(response.body.data).toBeTruthy();
        expect(response.body.success).toBeTruthy();
        expect(response.body.status).toEqual(200);
    });

});