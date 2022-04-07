import { GraphQLResolveInfo } from "graphql";
import { DeleteThreadArgs } from "./args/DeleteThreadArgs";
import { Thread } from "../../../models/Thread";
export declare class DeleteThreadResolver {
    deleteThread(ctx: any, info: GraphQLResolveInfo, args: DeleteThreadArgs): Promise<Thread | null>;
}
