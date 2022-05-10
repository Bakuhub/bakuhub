import "reflect-metadata";
// import {ApolloServer} from "apollo-server-micro";
import Cors from "micro-cors";
import {createContext} from "../../graphql/context";
import {createSchema} from "../../graphql/schema";
import {ApolloServer} from "apollo-server-nextjs";

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
export default apolloServer.createHandler({
                                              expressGetMiddlewareOptions: {
                                                  cors: {
                                                      origin: "*",
                                                      credentials: true,
                                                  },
                                              },
                                          });
