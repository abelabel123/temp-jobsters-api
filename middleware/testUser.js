const { BadRequestError } = require('../errors');
    const testUser = (req, res, next) => {
    if (req.user.testUser) {
    throw new BadRequestError('TestUser. Read Only');
    }
    next();
    };
    module.exports = testUser;