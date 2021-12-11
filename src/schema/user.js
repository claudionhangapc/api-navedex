const userLogin = {
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        token: { type: 'string' }
      }
    }
  },
  body: {
    type: 'object',
    additionalProperties: false,
    required: ['email', 'password'],
    properties: {
      email: { type: 'string' },
      password: { type: 'string' }
    }
  }
}

const userSign = {
  response: {
    200: {
      type: 'boolean'
    }
  },
  body: {
    type: 'object',
    additionalProperties: false,
    required: ['email', 'password'],
    properties: {
      email: { type: 'string' },
      password: { type: 'string' }
    }
  }
}

module.exports = {
  userLogin,
  userSign
}
