const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const hashPassword = async (password) => {
    
    let hashedPassword = await bcrypt.hash(password, 12)
    
    return hashedPassword
  }
  
  const comparePassword = async (password, storedPassword) => {
   
    let passwordMatch = await bcrypt.compare(password, storedPassword)
   
    return passwordMatch
  }
  
  const createToken = (payload) => {
    // Accepts a payload with which to create the token
    let token = jwt.sign(payload, APP_SECRET)
    //   Generates the token and encrypts it, returns the token when the process finishes
    return token
  }
  
  const verifyToken = (req, res, next) => {
    const { token } = res.locals
    //   Gets the token stored in the request lifecycle state
    let payload = jwt.verify(token, APP_SECRET)
    //   Verifys the token is legit
    if (payload) {
      //   Calls the next function if the token is valid
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
  
  const stripToken = (req, res, next) => {
    try {
      const token = req.headers['authorization'].split(' ')[1]
      // Gets the token from the request headers {authorization: Bearer Some-Token}
      // Splits the value of the authorization header
      if (token) {
        res.locals.token = token
        //   If the token exists we add it to the request lifecycle state
  
        return next()
      }
    } catch (error) {
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    }
  }
  
  module.exports = {
    stripToken,
    verifyToken,
    createToken,
    comparePassword,
    hashPassword
  }