import "reflect-metadata";
import {ApolloServer} from "apollo-server-micro";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";
import {MicroRequest} from "apollo-server-micro/dist/types";
import {ServerResponse} from "http";
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
// const schema = createSchema();
console.timeEnd("create schema");

console.time("start apollo");

const apolloServer = new ApolloServer({
                                          schema,
                                          context: createContext,
                                          plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
                                          csrfPrevention: true,
                                          logger: {
                                              debug(message?: any) {
                                                  console.info("debug", message);
                                              },
                                              error(message?: any) {
                                                  console.info("error", message);
                                              },
                                              warn(message?: any) {
                                                  console.info("warn", message);
                                              }, info(message?: any) {
                                                  console.info("info", message);
                                              }
                                          }
                                      });
console.timeEnd("start apollo");
const startServer = apolloServer.start();
export default cors(async function handler(
        req: MicroRequest, res: ServerResponse
) {
    console.info("req started==========================");
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }
    // if (process.env.NODE_ENV === "development") {
    //     await buildSchema({
    //                           resolvers,
    //                           validate: false,
    //                           emitSchemaFile: true
    //                       });
    // }
    console.time("graphql startServer");

    await startServer;
    console.timeEnd("graphql startServer");
    console.time("graphql handler");
    await apolloServer.createHandler({
                                         path: "/api/graphql", disableHealthCheck: true
                                     })(req, res);
    console.timeEnd("graphql handler");
});
