const router = require('express').Router();

let Vote = require('../models/vote.model');

router.route('/').get((req, res) => {
    Vote.find()
        .then( forms => res.json(forms))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const course = req.body.course;
    const courseId = req.body.courseId;
    const courseDate = req.body.courseDate;
    const trainer = req.body.trainer;
    const email = req.body.email;
    const good = req.body.good;
    const bad = req.body.bad;
    const q1 = req.body.q1;
    const q2 = req.body.q2;
    const q3 = req.body.q3;
    const q4 = req.body.q4;
    const q5 = req.body.q5;
    const q6 = req.body.q6;
    const q7 = req.body.q7;
    const q8 = req.body.q8;
    const q9 = req.body.q9;
    const q10 = req.body.q10;
    const q11 = req.body.q11;

    const newVote = new Vote({course, courseId, courseDate, trainer, email, good, bad, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11});

    newVote.save()
        .then(() => res.json('Vote added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Vote.findById(req.params.id)
        .then(form => res.json(form))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/:id').delete((req, res) => {
    Vote.findByIdAndDelete(req.params.id)
        .then(() => res.json('Vote deleted.'))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/').delete((req, res) => {
    Vote.findOneAndDelete(req.params.id)
        .then(() => res.json('Vote deleted.'))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/update/:id').post((req, res) => {
    Vote.findById(req.params.id)
        .then(form =>  {
            form.course = req.body.course;
            form.courseId = req.body.courseId;
            form.courseDate = req.body.courseDate;
            form.trainer = req.body.trainer;
            form.email = req.body.email;
            form.good = req.body.good;
            form.bad = req.body.bad;
            form.q1 = req.body.q1;
            form.q2 = req.body.q2;
            form.q3 = req.body.q3;
            form.q4 = req.body.q4;
            form.q5 = req.body.q5;
            form.q6 = req.body.q6;
            form.q7 = req.body.q7;
            form.q8 = req.body.q8;
            form.q9 = req.body.q9;
            form.q10 = req.body.q10;
            form.q11 = req.body.q11;

            form.save()
                .then(() => res.json('Vote updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json(('Error: ' + err)));
});


module.exports = router;