import { PremisesOnTimelinesOrderByWithRelationInput } from "../../../inputs/PremisesOnTimelinesOrderByWithRelationInput";
import { PremisesOnTimelinesWhereInput } from "../../../inputs/PremisesOnTimelinesWhereInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../../../inputs/PremisesOnTimelinesWhereUniqueInput";
export declare class FindManyPremisesOnTimelinesArgs {
    where?: PremisesOnTimelinesWhereInput | undefined;
    orderBy?: PremisesOnTimelinesOrderByWithRelationInput[] | undefined;
    cursor?: PremisesOnTimelinesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"timelineId" | "premiseId" | "assignedAt"> | undefined;
}
