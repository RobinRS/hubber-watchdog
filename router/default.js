const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.sended = true
  res.status(200).send('Hello from Watchdog Server')
})

module.exports = router
