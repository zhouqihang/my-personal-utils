import DateUtil from '../src/DateUtil.ts';

test('new Date(1692089479135) is 2023-08-15 16:51:19', () => {
  expect(new DateUtil(1692089479135).format()).toBe('2023-08-15 16:51:19');
})
test('new Date(1692089479135) yy is 2023-08-15 16:51:19', () => {
  expect(new DateUtil(1692089479135).format('yy/MM/dd HH:mm:ss')).toBe('23/08/15 16:51:19');
})
test('getTime is ok', () => {
  const date = new Date();
  expect(new DateUtil(date).getTime()).toBe(date.getTime())
})
test('getTime is ok', () => {
  const date = Date.now();
  expect(new DateUtil(date).getTime()).toBe(date)
})