export default function logger() {
    return function (next) {
      return function (action) {
        next(action);
      };
    };
}