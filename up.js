import express from "express"
import bodyParser from "body-parser"
import pkgApollo from "apollo-server-express"
const { ApolloServer } = pkgApollo
import pkg from "./typeDefs.js"
const {typeDefs} = pkg;

import pkgResolver from "./resolver.js"
const { resolvers} = pkgResolver;

const app = express()

app.use(bodyParser.json())

const server = new ApolloServer({
    introspection: true,
    typeDefs,
    resolvers,
    formatError: error =>{
        return error
    },
    context: ({req, res}) =>{
        return {
            req,
            res,
        }
    }
})

server.applyMiddleware({app, path:"/graphql"})

app.listen(9000, ()=>{
    console.log("app is listening to port 3030")
})