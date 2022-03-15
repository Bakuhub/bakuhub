import {gql} from "apollo-server-micro";
//
// export const createSchema = async () => await buildSchema({
//     resolvers: [FindManyUserResolver],
//     emitSchemaFile: true,
//     validate: false
// });
export const typeDefs = gql`
    type User {
        id:        String
        createdAt: String
        email     :String
        name      :String
        role      :String
    }

    type Query {
        users:[User]
    }
    input Thread {
        title:String
        
    }
    type Mutation {
        createThread(data:Thread): String
    }
`;