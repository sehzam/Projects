const router = require('express').Router();

let Course = require('../models/course.model');

router.route('/').get((req, res) => {
    Course.find()
        .then( users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const course = req.body.course;
    const trainer = req.body.trainer;
    const begin = Date.parse(req.body.begin);
    const end = Date.parse(req.body.end);
    const students = req.body.students;

    const newCourse = new Course({course, trainer, begin, end, students});

    newCourse.save()
        .then(() => res.json('Course added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Course.findById(req.params.id)
        .then(paper => res.json(paper))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/:id').delete((req, res) => {
    Course.findByIdAndDelete(req.params.id)
        .then(() => res.json('Course deleted.'))
        .catch(err => res.status(400).json(('Error: ' + err)));
});
router.route('/update/:id').post((req, res) => {
    Course.findById(req.params.id)
        .then(course =>  {
            course.course = req.body.course;
            course.trainer = req.body.trainer;
            course.begin = Date.parse(req.body.begin);
            course.end = Date.parse(req.body.end);
            course.students = req.body.students;

            course.save()
                .then(() => res.json('Course updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json(('Error: ' + err)));
});

module.exports = router;