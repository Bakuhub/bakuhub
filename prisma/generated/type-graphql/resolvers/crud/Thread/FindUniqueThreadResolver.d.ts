import { GraphQLResolveInfo } from "graphql";
import { FindUniqueThreadArgs } from "./args/FindUniqueThreadArgs";
import { Thread } from "../../../models/Thread";
export declare class FindUniqueThreadResolver {
    thread(ctx: any, info: GraphQLResolveInfo, args: FindUniqueThreadArgs): Promise<Thread | null>;
}
