var express = require('express');
var router = express.Router();
var taskModel = require('../modules/to-do');

// Displaying data on the Home Page
router.get('/', async function(req, res, next) {
  try {
    var task = await taskModel.find({});
    res.render('index', { title: 'To Do App', data: task });
  } catch (error) {
    console.log(error)
  }
});

// Adding new task to database
router.post('/', async function(req, res, next) {
  var taskDetails = new taskModel({
    taskName: req.body.taskname,
  });
  await taskDetails.save();
  res.redirect('/');
});

// Deleting the choosed task from the database
router.get('/delete/:id', async function(req, res, next) {
  var id = req.params.id;
  try {
    await taskModel.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    console.log(error)
  }
});

// 
router.get('/update/:id', async function(req, res, next) {
  var id = req.params.id;
  try {
    var task = await taskModel.findById(id);
    res.render('update', { title: 'To Do App', data: task });
  } catch (error) {
    console.log(error)
  }
});

router.post('/update', async function(req, res, next) {
  var id = req.body.id;
  try {
    await taskModel.findByIdAndUpdate(id, {
      taskName: req.body.updatedTaskName,
    });
    res.redirect('/');
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
