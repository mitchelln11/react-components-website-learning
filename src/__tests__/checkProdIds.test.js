import { checkProdId } from '../components/utils/checkProdIds';

describe('checkProdIds', ()=> {

    beforeEach(() => {
        const spyProdIds = jest.spyOn(Object, 'keys');
        spyProdIds.mockReturnValue([0, 2, 4, 5]);
    })
    
    test('Returns false if passed id does not match array of product ids', ()=> {
        const productId = checkProdId(1);
        expect(productId).toBeFalsy;
    })

    test('Returns true if passed id matches id in array of product ids', ()=> {
        const productId = checkProdId(2);
        expect(productId).toBeTruthy;
    })
})