
// usercontroller.js
import jwt from "jsonwebtoken"
import Usermodel from "../Models/UserModel.js";
import bcrypt from 'bcrypt'; // 1. Import bcrypt

// A salt rounds value. 10 is a good default.
const saltRounds = 10;

// create user
const CreateUser = async (req, res) => {
    try {
        // 2. Destructure the password from the request body    
        const { passWord, userId, userName, email } = req.body;

        // 3. Hash the password
        const hashedPassword = await bcrypt.hash(passWord, saltRounds);

        // 4. Create the user with the hashed password
        const newUser = await Usermodel.create({
            userId, userName, email,
            passWord: hashedPassword // Save the HASH, not the plain text password
        });

        // 5. Send back the user data WITHOUT the password
        const userResponse = { ...newUser.toObject() };
        delete userResponse.passWord; // Remove password from the response

        res.json({ success: true, message: "User created", User: userResponse });
    } catch (error) {
        res.json({ success: false, message: "Error creating User", error: error.message });
    }
};

// List all users
const ListUser = async (req, res) => {
    try {
        // Fetch users but exclude the password field
        // const Users = await Usermodel.find().select('-passWord');
        const Users = await Usermodel.find();
        res.json({ success: true, message: "User list fetched", Users });
    } catch (error) {
        res.json({ success: false, message: "Error fetching User list", error: error.message });
    }
};

// NEW FUNCTION: Login User
const LoginUser = async (req, res) => {
    try {
        const { email, passWord } = req.body;

        // 1. Find the user by their email. Make sure to include the password for comparison.
        const user = await Usermodel.findOne({ email }).select('+passWord');

        // 2. If user doesn't exist, return an error
        if (!user) {
            return res.json({ success: false, message: "Invalid email or password" });
        }

        // 3. Compare the provided password with the stored hash
        const isPasswordMatch = await bcrypt.compare(passWord, user.passWord);

        // 4. If passwords don't match, return an error
        if (!isPasswordMatch) {
            return res.json({ success: false, message: "Invalid email or password" });
        }

        // 5. If passwords match, login is successful!
        const token = jwt.sign(email, process.env.JWT_SECRET_KEY);
        console.log(token)

        res.json({ success: true, message: "Login successful", token });

    } catch (error) {
        res.json({ success: false, message: "Error during login", error: error.message });
    }
};


// Update User
const UpdateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        // If password is being updated, hash it first
        if (req.body.passWord) {
            req.body.passWord = await bcrypt.hash(req.body.passWord, saltRounds);
        }

        const updatedUser = await Usermodel.findOneAndUpdate(
            { userId: id },
            req.body,
            { new: true }
        ).select('-passWord'); // Exclude password from response

        if (!updatedUser) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, message: "User updated", updatedUser });
    } catch (error) {
        res.json({ success: false, message: "Error updating User", error: error.message });
    }
};  

// Delete User
const DeleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
8        // NOTE: Your original code had `userid`. The schema has `userId`. I've corrected it.
        const deletedUser = await Usermodel.findOneAndDelete({ userId: id });

        if (!deletedUser) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, message: "User deleted", deletedUser });
    } catch (error) {
        res.json({ success: false, message: "Error deleting User", error: error.message });
    }
};

// Export the new LoginUser function
export { CreateUser, ListUser, UpdateUser, DeleteUser, LoginUser };
