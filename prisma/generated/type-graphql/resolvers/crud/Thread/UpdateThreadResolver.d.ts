import { GraphQLResolveInfo } from "graphql";
import { UpdateThreadArgs } from "./args/UpdateThreadArgs";
import { Thread } from "../../../models/Thread";
export declare class UpdateThreadResolver {
    updateThread(ctx: any, info: GraphQLResolveInfo, args: UpdateThreadArgs): Promise<Thread | null>;
}
