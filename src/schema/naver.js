const naverCreate = {
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        job_role: { type: 'string' },
        admission_date: { type: 'string' },
        birthdate: { type: 'string' },
        name: { type: 'string' },
        projects: { type: 'array' }
      }
    }
  },
  body: {
    type: 'object',
    additionalProperties: false,
    required: ['job_role', 'admission_date', 'birthdate', 'name', 'projects'],
    properties: {
      job_role: { type: 'string' },
      admission_date: { type: 'string' },
      birthdate: { type: 'string' },
      name: { type: 'string' },
      projects: { type: 'array' }
    }
  }
}

const naverUpdate = {
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        job_role: { type: 'string' },
        admission_date: { type: 'string' },
        birthdate: { type: 'string' },
        name: { type: 'string' },
        projects: { type: 'array' }
      }
    }
  },
  body: {
    type: 'object',
    additionalProperties: false,
    required: ['job_role', 'admission_date', 'birthdate', 'name', 'projects'],
    properties: {
      job_role: { type: 'string' },
      admission_date: { type: 'string' },
      birthdate: { type: 'string' },
      name: { type: 'string' },
      projects: { type: 'array' }
    }
  }
}

module.exports = {
  naverCreate,
  naverUpdate
}
