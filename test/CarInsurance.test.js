const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();

const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts;
let carInsurance;

beforeEach(async () => {
// Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    carInsurance = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({ from: accounts[0], gas: '1000000' });
    carInsurance.setProvider(provider);
});

describe('CarInsurance', () => {
    it('deploys a contract', () => {
        //console.log(accounts);

        console.log(carInsurance);

    });
});