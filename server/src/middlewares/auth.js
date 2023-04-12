const jwt = require("jsonwebtoken");

function breakdown(temp) {
    pos = temp.lastIndexOf("=");
    return temp.substring(pos+1);
};

const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"] || breakdown(req.headers.cookie) || req.body.token || req.query.token;

    if (!token) {
        return res.status(403).send({"message": "A token is required for authentication"});
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;

    }catch(err) {

        return res.status(401).send({"message": "Invalid token"});
    
    }
    return next();
}
module.exports = verifyToken;