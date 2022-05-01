import { SupscriptionsOnTimelinesOrderByWithRelationInput } from "../../../inputs/SupscriptionsOnTimelinesOrderByWithRelationInput";
import { SupscriptionsOnTimelinesWhereInput } from "../../../inputs/SupscriptionsOnTimelinesWhereInput";
import { SupscriptionsOnTimelinesWhereUniqueInput } from "../../../inputs/SupscriptionsOnTimelinesWhereUniqueInput";
export declare class AggregateSupscriptionsOnTimelinesArgs {
    where?: SupscriptionsOnTimelinesWhereInput | undefined;
    orderBy?: SupscriptionsOnTimelinesOrderByWithRelationInput[] | undefined;
    cursor?: SupscriptionsOnTimelinesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
