import { Premise } from "../../../models/Premise";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
import { User } from "../../../models/User";
export declare class SubscriptionsOnPremisesRelationsResolver {
    user(subscriptionsOnPremises: SubscriptionsOnPremises, ctx: any): Promise<User>;
    premise(subscriptionsOnPremises: SubscriptionsOnPremises, ctx: any): Promise<Premise>;
}
