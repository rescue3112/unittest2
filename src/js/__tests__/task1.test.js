
import userLife from '../task1';

test('userLife check', () => {
  const someUser = userLife({ name: 'Маг', health: 30 });
  expect(someUser).toBe('wounded');
});

test('userLife check', () => {
  const someUser = userLife({ name: 'Маг', health: 10 });
  expect(someUser).toBe('critical');
});

test('userLife check', () => {
  const someUser = userLife({ name: 'Маг', health: 90 });
  expect(someUser).toBe('healthy');
});