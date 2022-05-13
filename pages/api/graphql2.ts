import "reflect-metadata";
import {ApolloServer} from "apollo-server-express";
import Cors from "micro-cors";
import {createContext} from "../../graphql/context";
import {createSchema} from "../../graphql/schema";

const cors = Cors();
export const config = {
    api: {
        bodyParser: false
    }
};
console.time("create schema");
(
        global as any
).schema = (
                   global as any
           ).schema || createSchema();
const schema = (
        global as any
).schema;
console.timeEnd("create schema");

console.time("start apollo");

const apolloServer = new ApolloServer({
                                          schema,
                                          context: createContext,
                                          csrfPrevention: true,
                                      });
console.timeEnd("start apollo");
const startServer = apolloServer.start();
export default cors(async function handler(req, res) {
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }
    await startServer;
    apolloServer.getMiddleware({
                                   path: "/api/graphql2"
                               })(req as any, res as any, () => {});
});
