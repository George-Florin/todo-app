const Todo = require("../models/Todo");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

//Todo Type
const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parent, args) {
        return Todo.find(args.id);
      },
    },
    todo: {
      type: TodoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Todo.findById(args.id);
      },
    },
  },
});

//Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //Add todo
    addTodo: {
      type: TodoType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const todo = new Todo({
          title: args.title,
          description: args.description,
        });

        return todo.save();
      },
    },
    //Delete todo
    deleteTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Todo.findByIdAndRemove(args.id);
      },
    },
    //Update todo
    updateTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Todo.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              description: args.description,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
