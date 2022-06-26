module.exports = function(req, res, next) {
    res.sendFile(__view+"/index.html"); 
}