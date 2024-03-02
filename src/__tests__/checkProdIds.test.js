import { checkProdId } from '../components/utils/checkProdIds';
// import Router from 'react-router';

describe.skip('checkProdIds', ()=> {
    // Value is pulled from URL with useParams()
    // jest.mock('react-router', () => ({
    //     ...jest.requireActual('react-router'),
    //     useParams: jest.fn()
    // }));
    // const mockParam = jest.fn();
    // const mockId = new mockParam();
    const mockFn = jest.fn(x => x);

    test.skip('Current Product id is returned', ()=> {
        // jest.spyOn(Router, 'useParams').mockReturnValue({ id: '2' });
        const productId = checkProdId(mockFn(2));
        console.log(productId);
        expect(productId).toBeTruthy();
    })
})