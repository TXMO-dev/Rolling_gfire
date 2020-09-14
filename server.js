const {ApolloServer} = require('apollo-server');
const typeDefs = require('./graphql/typeDefs/typeDefs');
const resolvers = require('./graphql/resolvers');
const dotenv = require('dotenv');


dotenv.config({path:'./config.env'});





const server = new ApolloServer({
        typeDefs,
        resolvers,
        context:(({req}) => ({req}))
})