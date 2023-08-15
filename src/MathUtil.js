const defaultRandomParams = {
    from: 0,
    to: 1,
    fromScope: '[',
    toScope: ']'
};
export function random(params) {
    if (params.to <= params.from) {
        throw new Error('Field "to" must > field "from"!');
    }
    params = Object.assign({}, defaultRandomParams, params);
    let handler;
    if (params.fromScope === '[' && params.toScope === ']') {
        handler = Math.round;
    }
    else if (params.fromScope === '(' && params.toScope === ']') {
        handler = Math.ceil;
    }
    else if (params.fromScope === '[' && params.toScope === ')') {
        handler = Math.floor;
    }
    if (handler) {
        return handler(Math.random() * (params.to - params.from)) + params.from;
    }
    const temp = Math.floor(Math.random() * (params.to - params.from)) + params.from;
    return temp === params.from ? temp + 1 : temp;
}
