export function isString(val) {
    return typeof val === 'string';
}
export function isNaNF(val) {
    return Number.isNaN ? Number.isNaN(val) : val !== val;
}
export function isNumber(val) {
    return typeof val === 'number' && !isNaNF(val);
}
export function isNumberString(val) {
    return isString(val) && /^(\-[0-9]+|[0-9]*)(\.[0-9]+)?$/.test(val);
}
export function isBoolean(val) {
    return typeof val === 'boolean';
}
export function isArray(val) {
    return Array.isArray ? Array.isArray(val) : Object.prototype.toString.call(val) === '[object Array]';
}
export function isFunction(val) {
    return typeof val === 'function';
}
