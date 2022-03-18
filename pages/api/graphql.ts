import "reflect-metadata";
import {MicroRequest} from "apollo-server-micro/dist/types";
import {ServerResponse} from "http";
import Cors from "micro-cors";
// @ts-ignore
import {readFileSync} from "fs";

const cors = Cors();

export default cors(async function handler(
        req: MicroRequest, res: ServerResponse
) {
    // if (req.method==="OPTIONS") {
    //     res.end();
    //     return false;
    // }
    // const apolloServer = new ApolloServer({
    //     schema: await createSchema(),
    //     context: {
    //         prisma,
    //     },
    // });
    // const startServer = apolloServer.start();
    // await startServer;
    // await apolloServer.createHandler({
    //     path: "/api/graphql",
    // })(req, res);
});
export const config = {
    api: {
        bodyParser: false
    }
};
