const User = require("../models/user");
const bcrypt = require('bcryptjs');

const userController = {
    addUser: async (req, res) => {
      try{
        const { username, password, name, email, role } = req.body;
        // Check if user already exists
        const userExists = await User.findOne({username});
        const emailExists = await User.findOne({email});

        if (userExists) {
          return res.status(409).send({error: 'User already exists'});
        }

        if (emailExists) {
          return res.status(409).send({error: 'This email has been used'});
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
          username,
          password: hashedPassword,
          name,
          email,
          role
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).send({message: 'User created successfully'});
      } catch (error) {
        console.log(error);
        res.status(500).send({error: 'Server error'});
      }
    }
}

module.exports = userController;