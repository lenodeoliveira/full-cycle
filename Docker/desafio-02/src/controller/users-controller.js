
const rescue = require('express-rescue');
const usersServices = require('../service/user-service');

const getAllUsers = rescue(async (req, res, next) => {
    await usersServices.addUsersService()
    const users = await usersServices.getAllUsers()
    res.status(200).json(users);
});

module.exports = {
    getAllUsers,
};