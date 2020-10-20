module.exports = {
  hello(req, res, next) {
    console.log('Hello');
    return next();
  },
};
