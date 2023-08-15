# my-personal-utils

## DateUtil

### static methods

| name | type | description |
| ---- | ---- | ----------- |
| format | `(date: number &#124; string &#124; Date, format: string) => string` | format Date to string. |

### class methods

| name | type | description |
| ---- | ---- | ----------- |
| constructor | `(date: number &#124; string &#124; Date) => DateUtil` | create a instance of DateUtil. |
| getDate | `() => Date` | get Date instance of current DateUtil. |
| setDate | `(date: number | string | Date) => DateUtil` | set Date instance of current DateUtil. |
| format | `(format?: string) => string` | same as the static method. |

## IsUtil

| name | description |
| ---- | ----------- |
| isString | judge the given value is a string or not. |
| isNaNF | judge the given value is a NaN or not. |
| isNumber | judge the given value is a number or not. |
| isNumberString | judge the given value is a number string or not. |
| isBoolean | judge the given value is a boolean or not. |
| isArray | judge the given value is an array or not. |
| isFunction | judge the given value is a function or not. |

## MathUtil

| name | sign | description |
| ---- | ---- | ----------- |
| random | `({from: number, to: number, fromScope?: '[(', toScope: ')]' }) => number` | get a random number between from and to. |