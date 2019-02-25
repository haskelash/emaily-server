module.exports = (req, res, next) => {
  if (req.user.credits <= 0) { res.status(403).send({ error: 'You don\'t have enough credits' }) }
  next()
}
