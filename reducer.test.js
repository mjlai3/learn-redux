import reducer from './reducer';

test('increment 1 to equal 2', () => {
  expect(reducer(1, { type: 'INCREMENT' })).toBe(2);
});

test('decrement 2 to equal 1', () => {
  expect(reducer(2, { type: 'DECREMENT' })).toBe(1);
});

test('enter invalid action to get current state', () => {
  expect(reducer(1, { type: 'INVALID_ACTION_TYPE' })).toBe(1);
});