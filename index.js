module.exports = function finalFormMutate(args, mutableState) {
  var callback = args[0];

  if (typeof callback !== 'function') {
    throw new TypeError('finalFormMutate first argument must be callback function');
  }

  callback(mutableState);
}
