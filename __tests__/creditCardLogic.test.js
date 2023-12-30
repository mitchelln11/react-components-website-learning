import {expect, test} from '@jest/globals';
import { parseCcForType } from '../src/components/ecomm/creditCardLogic';

describe('creditCardLogic', () => {
    describe('parseCcForType', () => {
        test('returns default value', () => {
            const ccVal = parseCcForType('1215986548542654');
            expect(ccVal).toEqual('No Credit Card Match')
        })

        test('returns Mastercard from a value starting with 2', () => {
            const ccVal = parseCcForType("2548544245114522");
            expect(ccVal).toBe('Mastercard')
        })

        test('returns American Express from a value starting with 3', () => {
            const ccVal = parseCcForType("3352126515321888");
            expect(ccVal).toBe('American Express')
        })
    
        test('returns Visa from a value starting with 4', () => {
            const ccVal = parseCcForType("451236548945");
            expect(ccVal).toBe('Visa')
        })

        test('returns Mastercard from a value starting with 5', () => {
            const ccVal = parseCcForType("5354986112541255");
            expect(ccVal).toBe('Mastercard')
        })
        
        test('returns Discover from a value starting with 6', () => {
            const ccVal = parseCcForType("6246894213540215");
            expect(ccVal).toBe('Discover')
        })
    })
    
})