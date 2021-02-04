const {User} = require('../models');
const {generateToken} = require('../helper/jwt');


class AuthController {
    static register(req, res) {
        console.log('masuk register');
        const {email, password} = req.body;
        const newUser = {email, password};
        User.create(newUser)
            .then(data => {
                const msg = {
                    message: 'Success',
                    data,
                    response: true
                }
                res.status(201).json(msg);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
    static async login(req, res) {
        try{
            const {email, password} = req.body;
            const opt = {
                where: {
                    email
                }
            }
    
            const user = await User.findOne(opt);
            console.log(user);
            if(!user) throw ('Invalid email or password');
            if(user.password === password) {
                console.log('password match');
                const payload = {
                    id: user.id,
                    email: user.email
                }
                const token = generateToken(payload);
                console.log(token);
                const msg = {
                    message: 'Success',
                    data: {
                       user,
                       token 
                    },
                    response: true
                }
                res.status(200).json(msg);
            }
        } catch(err) {
            res.status(500).json(err);
        }
    }
}



module.exports = AuthController;