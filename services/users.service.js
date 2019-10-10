const userData = require("../data/users.db.json");

class UserService {
  constructor() {}

  async fetchUsers() {
    return userData.users;
  }

  async fetchUserById(id) {
    const results = userData.users.filter(u => u.id == id);
    if (results.length > 0) {
      return results[0];
    } else {
      throw new Error("Sorry, could not find this user");
    }
  }

  async updateUser(updatedUser) {
    this.fetchUserById(updatedUser.id)
      .then(user => {
        user = updatedUser;
        return;
      })
      .catch(() => {
        throw new Error("Sorry, could not update user info");
      });
  }

  async createUser(newUser) {
    try {
      userData.users.push(newUser);
      return;
    } catch {
      throw new Error("Sorry, could not create user");
    }
  }
}

module.exports = UserService;
