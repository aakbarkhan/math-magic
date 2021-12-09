import operate from './operate';

describe('checking the operate function', () => {
  test('add the two numers', () => {
    expect(operate(3, 2, '+')).toEqual('5');
  });
  test('minus the two numers', () => {
    expect(operate(10, 2, '-')).toEqual('8');
  });
  test('multiply the two numers', () => {
    expect(operate(10, 2, 'x')).toEqual('20');
  });
  test('divide the two numers', () => {
    expect(operate(10, 2, '÷')).toEqual('5');
  });
  test('percent the two numers', () => {
    expect(operate(2, 10, '%')).toEqual('2');
  });
});
