import { PremiseOrderByWithRelationInput } from "../../../inputs/PremiseOrderByWithRelationInput";
import { PremiseWhereInput } from "../../../inputs/PremiseWhereInput";
import { PremiseWhereUniqueInput } from "../../../inputs/PremiseWhereUniqueInput";
export declare class UserPremisesArgs {
    where?: PremiseWhereInput | undefined;
    orderBy?: PremiseOrderByWithRelationInput[] | undefined;
    cursor?: PremiseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "createdAt" | "updatedAt" | "status" | "authorId"> | undefined;
}
