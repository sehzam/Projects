const router = require('express').Router();

let Log = require('../models/log.model');

router.route('/').get((req, res) => {
    Log.find()
        .then( logs => res.json(logs))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const isOnline = req.body.isOnline;
    const isStudent = req.body.isStudent;
    const isTrainer = req.body.isTrainer;
    const isAd = req.body.isAd;
    
    const newLog = new Log({
        email, 
        isOnline, 
        isStudent, 
        isTrainer, 
        isAd,
    });

    newLog.save()
        .then(() => res.json('Log added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Log.findById(req.params.id)
        .then(paper => res.json(paper))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/:id').delete((req, res) => {
    Log.findByIdAndDelete(req.params.id)
        .then(() => res.json('Log deleted.'))
        .catch(err => res.status(400).json(('Error: ' + err)));
});


module.exports = router;