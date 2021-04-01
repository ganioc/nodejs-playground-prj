import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import db from "./db.js"
import fs from "fs";
import resolvers from "./resolvers.js"
import  {makeExecutableSchema} from "graphql-tools"
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";

const typeDefs = fs.readFileSync('./schema.graphql', { encoding: 'utf-8' })
const schema = makeExecutableSchema({ typeDefs, resolvers })

const port = process.env.PORT || 9000;
const app = express();

app.use(cors(), bodyParser.json())

app.use('/graphql', graphqlExpress({schema}))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}))

app.listen(
    port,
    ()=> console.info(
        `Server started on port ${port}`
    )
)


