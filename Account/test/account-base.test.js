import { assertAccountBase } from "../../Commons/assert-helper";
import { getAccountBase } from "../main/cases/account-base";

let response;
describe('AccountBase', () => {

    it('should return valid account base response', async () => {
        response = await getAccountBase();
        assertAccountBase(response);
    });

});
