import { ReferenceCreateInput } from "../../../inputs/ReferenceCreateInput";
import { ReferenceUpdateInput } from "../../../inputs/ReferenceUpdateInput";
import { ReferenceWhereUniqueInput } from "../../../inputs/ReferenceWhereUniqueInput";
export declare class UpsertReferenceArgs {
    where: ReferenceWhereUniqueInput;
    create: ReferenceCreateInput;
    update: ReferenceUpdateInput;
}
