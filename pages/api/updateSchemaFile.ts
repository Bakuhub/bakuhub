import "reflect-metadata";
import {buildSchema} from "type-graphql";
import {resolvers} from "../../prisma/generated/type-graphql";

export default async function handler(
        req: { method: string; },
        res: { end: () => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { snapshot: string; }): void; new(): any; }; }; }
) {
    console.info("req started==========================");
    const schema = await buildSchema({
                                         resolvers,
                                         emitSchemaFile: process.env.NODE_ENV === "development",
                                         validate: false,
                                     });
    console.info("schema built==========================");
    console.info(schema);
    res.status(200).json({snapshot: "ok"});
}
// import "reflect-metadata";
// import {ApolloServer} from "apollo-server-express";
// import Cors from "micro-cors";
// import {createContext} from "../../graphql/context";
// import {createSchema} from "../../graphql/schema";
//
// const cors = Cors();
// export const config = {
//     api: {
//         bodyParser: false
//     }
// };
// console.time("create schema");
// (
//         global as any
// ).schema = (
//                    global as any
//            ).schema || createSchema();
// const schema = (
//         global as any
// ).schema;
// console.timeEnd("create schema");
//
// console.time("start apollo");
//
// const apolloServer = new ApolloServer({
//                                           schema,
//                                           context: createContext,
//                                           csrfPrevention: true,
//                                       });
// console.timeEnd("start apollo");
// const startServer = apolloServer.start();
// export default cors(async function handler(req, res) {
//     if (req.method === "OPTIONS") {
//         res.end();
//         return false;
//     }
//     await startServer;
//     apolloServer.getMiddleware({
//                                    path: "/api/graphql2"
//                                })(req as any, res as any, () => {});
// });
