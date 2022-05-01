import { SupscriptionsOnTimelinesOrderByWithRelationInput } from "../../../inputs/SupscriptionsOnTimelinesOrderByWithRelationInput";
import { SupscriptionsOnTimelinesWhereInput } from "../../../inputs/SupscriptionsOnTimelinesWhereInput";
import { SupscriptionsOnTimelinesWhereUniqueInput } from "../../../inputs/SupscriptionsOnTimelinesWhereUniqueInput";
export declare class FindManySupscriptionsOnTimelinesArgs {
    where?: SupscriptionsOnTimelinesWhereInput | undefined;
    orderBy?: SupscriptionsOnTimelinesOrderByWithRelationInput[] | undefined;
    cursor?: SupscriptionsOnTimelinesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "timelineId" | "type" | "createdAt" | "updatedAt"> | undefined;
}
