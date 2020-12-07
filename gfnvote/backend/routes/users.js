const router = require('express').Router();

let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then( users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const isReg = req.body.isReg;

    const newUser = new User({username, email, password, role, isReg});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(paper => res.json(paper))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user =>  {
            user.username = req.body.username;
            user.email = req.body.email;
            user.password = req.body.password;
            user.role = req.body.role;
            user.isReg = req.body.isReg;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json(('Error: ' + err)));
});


module.exports = router;