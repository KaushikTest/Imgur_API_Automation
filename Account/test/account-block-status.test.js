import { getAccountBlockStatus } from "../main/cases/account-block-status";

let response;
describe('AccountBase', () => {

    it('check the status of account block', async () => {
        response = await getAccountBlockStatus();
        expect(response.status).toBe(200);
        expect(response.body.data.blocked).toBeFalsy();
    });

});
