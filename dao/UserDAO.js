module.exports = {

    findUserByEmailAndPassword : (email , password) => {
        let foundUser = FAKE_DB.users.find((user) =>{
            return email === user.email && password === user.password;
        })
        return foundUser;
    },

    create : (user) => {
        user._id = -1;
        FAKE_DB.users.push(user);
    }
}
