const account = require('../src/account');

//account.deposit = jest.fn();
//account.withdraw = jest.fn();

// https://github.com/thoughtworks-jumpstart/tdd-with-jest


describe('account', () => {
  test('getBalance()', () => {
    expect(account.getBalance()).toEqual(account.balance);
  });

  // when account balance is 500
  test('deposit(amount)', () => {
    account.deposit(100);
    expect(account.getBalance()).toEqual(600);
  });

  test('withdraw(amount)', () => {
    account.withdraw(100);
    expect(account.getBalance()).toEqual(500);
  });

  // when account balance is 5000 and cannot deposit
  test.skip('deposit(amount)', () => {
    account.deposit(100);
    expect(account.getBalance()).toEqual(5000);
  });

  // when account balance is 0 and cannot withdraw
  test.skip('withdraw(amount)', () => {
    account.withdraw(100);
    expect(account.getBalance()).toEqual(0);
  });
});