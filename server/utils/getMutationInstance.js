const schemaFields = require('../constants/schemaFields');
const { addResolver, deleteResolver, updateResolver } = require('../resolvers');

const getMutationInstance = {
  add: (Schema, Model, args) => ({
    type: Schema,
    args,
    resolve: addResolver(Model),
  }),
  delete: (Schema, Model) => ({
    type: Schema,
    args: schemaFields.fieldId,
    resolve: deleteResolver(Model),
  }),
  update: (Schema, Model, args) => ({
    type: Schema,
    args,
    resolve: updateResolver(Model),
  }),
};

module.exports = getMutationInstance;
