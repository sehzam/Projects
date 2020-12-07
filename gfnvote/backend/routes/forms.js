const router = require('express').Router();

let Form = require('../models/form.model');

router.route('/').get((req, res) => {
    Form.find()
        .then( forms => res.json(forms))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const courseId = req.body.courseId;
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

    const newForm = new Form({courseId, trainer, email, good, bad, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11});

    newForm.save()
        .then(() => res.json('Form added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Form.findById(req.params.id)
        .then(form => res.json(form))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/:id').delete((req, res) => {
    Form.findByIdAndDelete(req.params.id)
        .then(() => res.json('Form deleted.'))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/').delete((req, res) => {
    Form.findOneAndDelete(req.params.id)
        .then(() => res.json('Form deleted.'))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/update/:id').post((req, res) => {
    Form.findById(req.params.id)
        .then(form =>  {
            form.courseId = req.body.courseId;
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
                .then(() => res.json('Form updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json(('Error: ' + err)));
});


module.exports = router;