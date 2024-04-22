export function translate2d(dx, dy) {
  return function (x, y) {
    return [x + dx, y + dy];
  };
}

export function scale2d(sx, sy) {
  return function (x, y) {
    return [x * sx, y * sy];
  };
}

export function composeTransform(...funcs) {
  return function (x, y) {
    let result = [x, y];

    for (const func of funcs) {
      result = func(...result);
    }

    return result;
  };
}

export function memoizeTransform(func) {
  let lastArgs = null;
  let lastResult = null;

  return function (...args) {
    if (JSON.stringify(args) === JSON.stringify(lastArgs)) {
      return lastResult;
    } else {
      lastArgs = args;
      lastResult = func(...args);
      return lastResult;
    }
  };
}
