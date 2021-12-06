import { cardNumberFormatter, expirationDateFormatter } from './formatters';

describe('cardNumberFormatter', () => {
  test.each([
    {
      oldValue: '',
      newValue: '5555555555554444',
      output: '5555 5555 5555 4444',
    },
    {
      oldValue: '',
      newValue: '55555555555544443333',
      output: '5555 5555 4444 3333',
    },
  ])('%j', ({ oldValue, newValue, output }) => {
    expect(cardNumberFormatter(oldValue, newValue)).toEqual(output);
  });
});

describe('expirationDateFormatter', () => {
  test.each([
    {
      oldValue: '',
      newValue: '1121',
      output: '11/21',
    },
    {
      oldValue: '12/2',
      newValue: '12/',
      output: '12/',
    },
  ])('%j', ({ oldValue, newValue, output }) => {
    expect(expirationDateFormatter(oldValue, newValue)).toEqual(output);
  });
});
