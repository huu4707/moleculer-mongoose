const User = require('../models/user');

async function initDatabase() {
    const count = await User.countDocuments({}); //count k còn khả dụng trong tương lai
    if (count === 0) await createInitDatabase();
}


async function createInitDatabase() {
    await initUsers();
}


async function initUsers() {
    const user = new User({
        username: 'huu490',
        fullName: 'Nugyen tien huu',
        email: 'nguyentienhuu47@gmail.com',
    });
    const count = await User.countDocuments({});
    if (count === 0) {
        await user.save();
    }
}

module.exports = {
    initDatabase
}