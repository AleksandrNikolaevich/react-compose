export default function () {
    var compositions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        compositions[_i] = arguments[_i];
    }
    return function (WrappedComponent) {
        return compositions.reverse().reduce(function (compose, composition) {
            return composition(compose);
        }, WrappedComponent);
    };
}
