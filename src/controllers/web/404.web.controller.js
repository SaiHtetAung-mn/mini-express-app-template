module.exports = function(req, res, next) {
    res.status(404).sendFile(__view+"/404.html");
}