import { random } from '../src/MathUtil.ts';

for(let i = 0; i < 50; i++) {
  test('[10, 50] random test: ' + i + 1, () => {
    const res = random({ from: 10, to: 50})
    expect(res).toBeGreaterThanOrEqual(10)
    expect(res).toBeLessThanOrEqual(50);
  })
}
for(let i = 0; i < 50; i++) {
  test('(30, 60] random test: ' + i + 1, () => {
    const res = random({ from: 30, to: 60, fromScope: '(', toScope: ']' })
    expect(res).toBeGreaterThan(30)
    expect(res).toBeLessThanOrEqual(60);
  })
}
for(let i = 0; i < 50; i++) {
  test('[25, 100) random test: ' + i + 1, () => {
    const res = random({ from: 25, to: 100, fromScope: '[', toScope: ')' })
    expect(res).toBeGreaterThanOrEqual(25)
    expect(res).toBeLessThan(100);
  })
}
for(let i = 0; i < 50; i++) {
  test('(50, 500) random test: ' + i + 1, () => {
    const res = random({ from: 50, to: 500, fromScope: '(', toScope: ')' })
    expect(res).toBeGreaterThan(50)
    expect(res).toBeLessThan(500);
  })
}
test('[100, 20] random will throw Error', () => {
  expect(() => random({ from: 100, to: 20 })).toThrow('Field "to" must > field "from"!')
})