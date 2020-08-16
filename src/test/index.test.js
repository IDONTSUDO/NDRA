/* eslint-disable */
const expect = require('chai').expect;
const { dataReplace } = require("../helper/files")
describe('Сore logic tests', function () {
    it('Replace Functions', async function () {
        let data = "1,1"
        let regExp = '1'
        const ReplaceStr = '2'
        const result = dataReplace(data, regExp, ReplaceStr)
        if(result !== '2,2'){
            return Error("Err")
        }
    })
})