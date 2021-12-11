const projetoCreate = {
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        navers: { type: 'array' }
      }
    }
  },
  body: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'navers'],
    properties: {
      name: { type: 'string' },
      navers: { type: 'array' }
    }
  }
}

const projetoUpdate = {
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        navers: { type: 'array' }
      }
    }
  },
  body: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'navers'],
    properties: {
      name: { type: 'string' },
      navers: { type: 'array' }
    }
  }
}

module.exports = {
  projetoCreate,
  projetoUpdate
}
