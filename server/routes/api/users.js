const express = require('express')
const bodyParser = require('body-parser')
const User = require('../../models/User')

const router = express.Router()
const jsonParser = bodyParser.json()

// @route GET api/users/test
// @description tests users route
// @access Public
router.get('/test', (req, res) => res.send('user route testing!'))

// @route GET api/users
// @description Get all users
// @access Public
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: 'No users found' }))
})

// @route GET api/users/:id
// @description Get single user by id
// @access Public
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nouserfound: 'No user found' }))
})

// @route GET api/users
// @description add/save user
// @access Public
router.post('/', jsonParser, (req, res) => {
  User.create(req.body)
    .then(user => res.json({ msg: 'user added successfully' }))
    .catch(err => res.status(400).json({ message: 'Unable to add this user', error: err, body: req.body }))
})

// @route GET api/users/:id
// @description Update user
// @access Public
router.put('/:id', jsonParser, (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    )
})

// @route GET api/users/:id
// @description Delete user by id
// @access Public
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({ mgs: 'user entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a user' }))
})

module.exports = router
