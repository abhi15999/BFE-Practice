// 1. Currying - https://bigfrontend.dev/problem/implement-curry

use 'strict';

function currying (fn = function(){}) {
    return function curriedFunction (...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args1) {
                return curriedFunction.apply(this, args.concat(args1))
            }
        }
    }
}