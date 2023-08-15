export function isString(val: unknown): val is string {
  return typeof val === 'string';
}

export function isNaNF(val: unknown): val is typeof NaN {
  return Number.isNaN ? Number.isNaN(val) : val !== val;
}

export function isNumber(val: unknown): val is number {
  return typeof val === 'number' && !isNaNF(val);
}

export function isNumberString(val: unknown): val is string {
  return isString(val) && /^(\-[0-9]+|[0-9]*)(\.[0-9]+)?$/.test(val);
}

export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean';
}

export function isArray<T = any>(val: unknown): val is Array<T> {
  return Array.isArray ? Array.isArray(val) : Object.prototype.toString.call(val) === '[object Array]';
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}
