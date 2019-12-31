"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add() {
    var tmp = 0;
    for (var index = 0; index < arguments.length; index++) {
        var element = arguments[index];
        if (typeof element == 'number') {
            tmp = tmp + element;
        }
    }
    return (tmp);
}
exports.add = add;
function concat() {
    var tmp = "";
    for (var index = 0; index < arguments.length; index++) {
        var element = arguments[index];
        if (typeof element == 'string') {
            tmp = tmp + " " + element;
        }
    }
    return (tmp);
}
exports.concat = concat;
//# sourceMappingURL=index.js.map