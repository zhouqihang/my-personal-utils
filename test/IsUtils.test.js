import { isString, isNaNF, isNumber, isNumberString, isArray } from '../src/IsUtil.ts';

/******************* isString ***************/
test("'kkdf' is a string", () => {
  expect(isString('kkdf')).toBe(true);
})
test("'kkdf123124' is a string", () => {
  expect(isString('kkdf123124')).toBe(true);
})
test("'123354534' is not a string", () => {
  expect(isString(123354534)).toBe(false);
})
test("'true' is not a string", () => {
  expect(isString(true)).toBe(false);
})
test("'false' is not a string", () => {
  expect(isString(false)).toBe(false);
})
test("[1, 2, 3] is not a string", () => {
  expect(isString([1, 2, 3])).toBe(false);
})
test("{} is not a string", () => {
  expect(isString({})).toBe(false);
})
test("/^[0-9]/ is not a string", () => {
  expect(isString(/^[0-9]/)).toBe(false);
})
test("() => {} is not a string", () => {
  expect(isString(() => {})).toBe(false);
})

/******************* isNaNF ***************/
test("NaN is a NaN", () => {
  expect(isNaNF(NaN)).toBe(true);
})
test("100.59 is not a NaN", () => {
  expect(isNaNF(100.29)).toBe(false);
})
test("true is not a NaN", () => {
  expect(isNaNF(true)).toBe(false);
})
test("null is not a NaN", () => {
  expect(isNaNF(null)).toBe(false);
})
test("undefined is not a NaN", () => {
  expect(isNaNF(undefined)).toBe(false);
})
test("'hello world' is not a NaN", () => {
  expect(isNaNF('hello world')).toBe(false);
})
/******************* isNumber ***************/
test("100 is a Number", () => {
  expect(isNumber(100)).toBe(true);
})
test("99.999 is a Number", () => {
  expect(isNumber(99.999)).toBe(true);
})
test("Number(55) is a Number", () => {
  expect(isNumber(Number(55))).toBe(true);
})
test("'125' is not a Number", () => {
  expect(isNumber('125')).toBe(false);
})
test("true is not a Number", () => {
  expect(isNumber(true)).toBe(false);
})
test("null is not a Number", () => {
  expect(isNumber(null)).toBe(false);
})
test("undefined is not a Number", () => {
  expect(isNumber(undefined)).toBe(false);
})
test("NaN is not a Number", () => {
  expect(isNumber(NaN)).toBe(false);
})
/******************* isNumberString ***************/
test("'100' is a Number String", () => {
  expect(isNumberString('100')).toBe(true);
})
test("'100.125' is a Number String", () => {
  expect(isNumberString('100.125')).toBe(true);
})
test("'-100' is a Number String", () => {
  expect(isNumberString('-100')).toBe(true);
})
test("'-99.999985' is a Number String", () => {
  expect(isNumberString('-99.999985')).toBe(true);
})
test("'-99.999985a' is not a Number String", () => {
  expect(isNumberString('-99.999985a')).toBe(false);
})
test("'100' is not a Number String", () => {
  expect(isNumberString(100)).toBe(false);
})
test("-96 is not a Number String", () => {
  expect(isNumberString(-96)).toBe(false);
})
test("'100eb' is not a Number String", () => {
  expect(isNumberString('100eb')).toBe(false);
})
test("'hello' is not a Number String", () => {
  expect(isNumberString('hello')).toBe(false);
})
test("'null' is not a Number String", () => {
  expect(isNumberString('null')).toBe(false);
})
test("'undefined' is not a Number String", () => {
  expect(isNumberString('undefined')).toBe(false);
})
test("[] is not a Number String", () => {
  expect(isNumberString([])).toBe(false);
})
test("{} is not a Number String", () => {
  expect(isNumberString({})).toBe(false);
})

/******************* isArray ***************/
test("[] is an Array", () => {
  expect(isArray([])).toBe(true);
})
test("[1, 2, 3] is an Array", () => {
  expect(isArray([1, 2, 3])).toBe(true);
})
test("new Array() is an Array", () => {
  expect(isArray(new Array())).toBe(true);
})
test("{} is note an Array", () => {
  expect(isArray({})).toBe(false);
})
test("function is note an Array", () => {
  expect(isArray(() => {})).toBe(false);
})
test("{0: 'a', 1: 'b', length: 2} is note an Array", () => {
  expect(isArray({0: 'a', 1: 'b', length: 2})).toBe(false);
})