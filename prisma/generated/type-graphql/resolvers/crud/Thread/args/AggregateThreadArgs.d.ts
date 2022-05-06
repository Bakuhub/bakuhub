import { ThreadOrderByWithRelationInput } from "../../../inputs/ThreadOrderByWithRelationInput";
import { ThreadWhereInput } from "../../../inputs/ThreadWhereInput";
import { ThreadWhereUniqueInput } from "../../../inputs/ThreadWhereUniqueInput";
export declare class AggregateThreadArgs {
    where?: ThreadWhereInput | undefined;
    orderBy?: ThreadOrderByWithRelationInput[] | undefined;
    cursor?: ThreadWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
