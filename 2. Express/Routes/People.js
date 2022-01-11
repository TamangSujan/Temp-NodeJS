const express = require('express')

//Instead of creating more routes we can group them and get through Router
const router = express.Router()
const {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson} = require('../Controllers/People')

/*
router.get('/', getPeople)
//Even if url is same post ad get are different methods
router.post('/', createPerson)

router.post('/postman', createPersonPostman)

//For modification
router.put('/:id', updatePerson)

router.delete('/:id',deletePerson)
*/
//You can do above or chaining method
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)
module.exports = router