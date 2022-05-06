import "reflect-metadata";
import {ApolloServer} from "apollo-server-micro";
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


export default cors(async function handler(
        req: MicroRequest, res: ServerResponse
) {
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }

// use the toString() method to convert
// Buffer into String

    console.info("start graphql");
    console.time("schema");
    const schema = createSchema();
    console.timeEnd("schema");
    console.time("start apollo");
    const apolloServer = new ApolloServer({
                                              schema,
                                              context: createContext,
                                          });
    console.timeEnd("start apollo");
    console.time("graphql1");

    const startServer = apolloServer.start();
    await startServer;
    console.timeEnd("graphql1");
    await apolloServer.createHandler({
                                         path: "/api/graphql",
                                     })(req, res);
});
