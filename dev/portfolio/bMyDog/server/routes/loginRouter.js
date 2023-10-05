const OwnerSchema = require('../api/models/OwnerSchema');
const bcrypt = require('bcrypt');
const express = require('express');
const loginRouter = express.Router();

// POST register
loginRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ msg: 'Password and email are required' });

    if (password.length < 8) {
        return res
            .status(400)
            .json({ msg: 'Password should be at least 8 characters long' })
    };

    // connect to database, search for user with email
    const user = await OwnerSchema.findOne({ email }); // finding user in db
    if (user) return res.status(400).json({ msg: 'User already exists' });

    const newUser = new OwnerSchema({ name, email, password });
    // hashing the password
    bcrypt.hash(password, 7, async (err, hash) => {
        if (err)
            return res.status(400).json({ msg: 'error while saving the password' });

        // rewrite user password with the hash
        newUser.password = hash;
        const savedUserRes = await newUser.save();

        if (savedUserRes)
            return res.status(200).json({ msg: 'user is successfully saved' });
    });
});

// POST login
loginRouter.post(`/login`, async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ msg: 'Something missing' })
    };

    const user = await OwnerSchema.findOne({ email: email }); // finding user in db
    if (!user) {
        return res.status(400).json({ msg: 'User not found' })
    };

    // comparing the password with the saved hash-password
    const matchPassword = await bcrypt.compare(password, user.password);

    if (matchPassword) {
        // keep user logged in on refresh
        const userSession = { email: user.email };

        // attach user session to session object
        req.session.user = userSession;

        return res
            .status(200)
            .json({ msg: 'You have logged in successfully', userSession })
    } else {
        return res.status(400).json({ msg: 'Invalid credential' })
    };
});

loginRouter.get('/owners', async (req, res) => {
    const owners = await OwnerSchema.find();
    return res.status(200).json(owners);

})

loginRouter.delete(`/logout`, async (req, res) => {
    req.session.destroy((error) => {
        if (error) throw error

        res.clearCookie('session-id') // cleaning the cookies from the user session
        res.status(200).send('Logout Success')
    })
})

loginRouter.get('/isAuth', async (req, res) => {
    if (req.session.user) {
        return res.json(req.session.user)
    }
    else {
        return res.status(401).json('unauthorize')
    }
});



module.exports = loginRouter;