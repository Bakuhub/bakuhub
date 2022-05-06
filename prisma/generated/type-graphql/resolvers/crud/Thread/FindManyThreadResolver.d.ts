import { GraphQLResolveInfo } from "graphql";
import { FindManyThreadArgs } from "./args/FindManyThreadArgs";
import { Thread } from "../../../models/Thread";
export declare class FindManyThreadResolver {
    threads(ctx: any, info: GraphQLResolveInfo, args: FindManyThreadArgs): Promise<Thread[]>;
}
