import { GraphQLResolveInfo } from "graphql";
import { CreateThreadArgs } from "./args/CreateThreadArgs";
import { Thread } from "../../../models/Thread";
export declare class CreateThreadResolver {
    createThread(ctx: any, info: GraphQLResolveInfo, args: CreateThreadArgs): Promise<Thread>;
}
