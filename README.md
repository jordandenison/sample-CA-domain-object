# Currently Supported Options
- partial: true|false

# Currently Supported Flags

## Validation
- type: string|number|boolean|array<type>|object|custom
- required: true
  - defaultValue: value to use if no input value and required is true
- enum: definable string constant
- uuid: valid uuid

## Data
- unique: true  // TODO: Implement

## IO Adapters
- private: 'server' (for example password field of user)  // TODO: Implement
