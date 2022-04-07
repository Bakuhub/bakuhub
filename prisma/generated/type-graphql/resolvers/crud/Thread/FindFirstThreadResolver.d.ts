import { GraphQLResolveInfo } from "graphql";
import { FindFirstThreadArgs } from "./args/FindFirstThreadArgs";
import { Thread } from "../../../models/Thread";
export declare class FindFirstThreadResolver {
    findFirstThread(ctx: any, info: GraphQLResolveInfo, args: FindFirstThreadArgs): Promise<Thread | null>;
}
