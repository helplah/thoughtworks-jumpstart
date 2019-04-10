const account = require('../src/account');

const amount = 100;

describe('account', () => {
  test('getBalance()', () => {
    expect(account.getBalance()).toEqual(account.balance);
  });

  // when account balance is 500
  test('deposit(amount)', () => {
    account.deposit(amount);
    expect(account.getBalance()).toEqual(600);
  });

  test('withdraw(amount)', () => {
    account.withdraw(amount);
    expect(account.getBalance()).toEqual(500);
  });

  // when account balance is 5000 and cannot deposit
  test.skip('deposit(amount)', () => {
    account.deposit(amount);
    expect(account.getBalance()).toEqual(5000);
  });

  // when account balance is 0 and cannot withdraw
  test.skip('withdraw(amount)', () => {
    account.withdraw(amount);
    expect(account.getBalance()).toEqual(0);
  });
});