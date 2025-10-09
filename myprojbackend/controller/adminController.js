const User=require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Admin login
const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await User.findOne({ email, role: 'admin' });
        if (!admin) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ admin_id: admin._id, role: admin.role }, 'secret_token', {
            expiresIn: '1h',
        });
        res.status(200).json(token );
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
const registerAdmin = async (req, res) => {
    
    const { name, email, password } = req.body;

    try {
        // Check if admin already exists
        const existingAdmin = await User.findOne({ email, role: 'admin' });
        if (existingAdmin) {
            return res.status(400).json({ error: 'Admin already exists' });
        }

        // Create new admin
        const newAdmin = new User({
            name,
            email,
            password,
            role: 'admin', // Set role to admin
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports={adminLogin,registerAdmin};