const UserService = require("../services/users.service");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async getAllUsers(req, res) {
    return this.userService
      .fetchUsers()
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        res.status(400).json({ message: error.message });
      });
  }

  async getUser(req, res) {
    return this.userService
      .fetchUserById(req.params.userid)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  }

  async newUser(req, res) {
    const newId = await this.userService.fetchUsers().length;
    console.log("*** req.body", req);
    const newUser = {
      id: newId,
      ...req.body
    };
    return this.userService
      .createUser(newUser)
      .then(() => {
        res.status(200).json({ message: "Successfully created new user" });
      })
      .catch(err => {
        res.status(400).json({ message: err.message });
      });
  }

  async editUser(req, res) {
    return this.userService
      .updateUser(req.body)
      .then(() => {
        res.status(200).json({ message: "Successfully updated user info" });
      })
      .catch(err => {
        res.status(400).json({ message: err.message });
      });
  }
}

module.exports = UserController;
