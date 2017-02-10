/**
 * Internal dependencies
 */
var validate = require('ca-validation')

var schema = {
  type: { type: 'enum', types: [ 'type1', 'type2' ], required: true },
  text: { type: 'string' },
  number: { type: 'number' },
  active: { type: 'boolean', required: true, defaultValue: true },
  resourceId: { type: 'uuid', required: true },
  items: { type: 'array', of: 'string' },
  address: {
    type: 'object',
    street: { type: 'string', required: true },
    city: { type: 'string', required: true }
  }
}

function Domain (data, options) {
  var errors = validate(data, schema, options)
  if (errors) { throw new Error(JSON.stringify(errors)) }

  return data
}

Domain.getSchema = function () { return JSON.parse(JSON.stringify(schema)) }

module.exports = Domain
