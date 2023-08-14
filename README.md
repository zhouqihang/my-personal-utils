# my-personal-utils

## DateUtil

### static methods

| name | type | description |
| ---- | ---- | ----------- |
| format | `(date: number | string | Date, format: string) => string` | format Date to string |

### class methods

| name | type | description |
| ---- | ---- | ----------- |
| constructor | `(date: number | string | Date) => DateUtil` | create a instance of DateUtil |
| getDate | `() => Date` | get Date instance of current DateUtil |
| setDate | `(date: number | string | Date) => DateUtil` | set Date instance of current DateUtil |
| format | `(format?: string) => string` | same as the static method |