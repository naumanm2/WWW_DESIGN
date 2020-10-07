const router = require('express').Router()
const pinRoutes = require('./pins')

router.use('/api/pins', pinRoutes)

module.exports = router
