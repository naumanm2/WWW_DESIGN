const router = require('express').Router()
const pinRouter = require('../controllers/galleries')

router
      .route('/')
      .get(pinRouter.getAll)
      .post(pinRouter.create)

router
      .route('/:id')
      .get(pinRouter.findById)
      .put(pinRouter.update)
      .delete(pinRouter.remove)

module.exports = router
