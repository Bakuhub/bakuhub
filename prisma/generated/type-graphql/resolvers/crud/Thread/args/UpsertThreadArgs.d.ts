import { ThreadCreateInput } from "../../../inputs/ThreadCreateInput";
import { ThreadUpdateInput } from "../../../inputs/ThreadUpdateInput";
import { ThreadWhereUniqueInput } from "../../../inputs/ThreadWhereUniqueInput";
export declare class UpsertThreadArgs {
    where: ThreadWhereUniqueInput;
    create: ThreadCreateInput;
    update: ThreadUpdateInput;
}
