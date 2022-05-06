import { SubscriptionsOnPremisesOrderByWithRelationInput } from "../../../inputs/SubscriptionsOnPremisesOrderByWithRelationInput";
import { SubscriptionsOnPremisesWhereInput } from "../../../inputs/SubscriptionsOnPremisesWhereInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../../../inputs/SubscriptionsOnPremisesWhereUniqueInput";
export declare class FindFirstSubscriptionsOnPremisesArgs {
    where?: SubscriptionsOnPremisesWhereInput | undefined;
    orderBy?: SubscriptionsOnPremisesOrderByWithRelationInput[] | undefined;
    cursor?: SubscriptionsOnPremisesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "premiseId" | "hasUnreadNotifications" | "lastReadAt" | "type" | "createdAt" | "updatedAt"> | undefined;
}
