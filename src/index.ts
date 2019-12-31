export function add() {
    var tmp = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        if (typeof element == 'number') {
            tmp = tmp + element;
        }
    }
    return (tmp);
}

export function cancat() {
    var tmp;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        if (typeof element == 'string') {
            tmp = tmp +" "+ element;
        }
    }
    return (tmp);
}

