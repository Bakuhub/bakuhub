import "reflect-metadata";
import {ApolloServer} from "apollo-server-micro";
import {MicroRequest} from "apollo-server-micro/dist/types";
import {ServerResponse} from "http";
import Cors from "micro-cors";
import {createContext} from "../../graphql/context";
import {createSchema} from "../../graphql/schema";
import {buildSchema} from "type-graphql";
import {resolvers} from "../../prisma/generated/type-graphql";

const cors = Cors();
export const config = {
    api: {
        bodyParser: false
    }
};
console.time("schema");
const schema = createSchema();
console.timeEnd("schema");
console.time("start apollo");

const apolloServer = new ApolloServer({
                                          schema,
                                          context: createContext,
                                      });
console.timeEnd("start apollo");
const startServer = apolloServer.start();
export default cors(async function handler(
        req: MicroRequest, res: ServerResponse
) {
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }
    if (process.env.NODE_ENV === "development") {
        await buildSchema({
                              resolvers,
                              validate: false,
                              emitSchemaFile: true
                          });
    }


    await startServer;
    await apolloServer.createHandler({
                                         path: "/api/graphql",
                                     })(req, res);
});
