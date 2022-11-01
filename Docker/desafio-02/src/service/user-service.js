const db = require('../config/db')

const addUsersService = async () => {
    const novoUser = {
        id: 1,
        name: 'John Doe',
    }

    db('peoples').insert(novoUser)
        .then(res => console.log(res))
        .catch(err => console.log(err.sqlMessage))
};

const getAllUsers= async () => {
  const users = await db.select('name')
  .from('peoples')

    if(!users.length) {
        await addUsersService()
    }

  return users
};


module.exports = {
    getAllUsers,
}