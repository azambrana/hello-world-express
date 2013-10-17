var mockup = require('../data/mockup');

exports.mockup = function(req, res){
    //res.writeHead(200, {"Content-Type": "application/json"});
    res.json(mockup);
    res.end();
};
