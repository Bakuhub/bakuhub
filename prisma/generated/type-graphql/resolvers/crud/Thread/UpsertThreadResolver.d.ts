import { GraphQLResolveInfo } from "graphql";
import { UpsertThreadArgs } from "./args/UpsertThreadArgs";
import { Thread } from "../../../models/Thread";
export declare class UpsertThreadResolver {
    upsertThread(ctx: any, info: GraphQLResolveInfo, args: UpsertThreadArgs): Promise<Thread>;
}
