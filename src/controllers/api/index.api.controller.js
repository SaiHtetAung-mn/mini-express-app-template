module.exports = function (req, res, next) {
    res.json({status: 200, data: {message: "Hello"}});
}