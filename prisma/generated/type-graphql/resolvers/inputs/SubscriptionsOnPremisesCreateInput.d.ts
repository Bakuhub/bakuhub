import { PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput";
import { UserCreateNestedOneWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateNestedOneWithoutSubscriptionsOnPremisesInput";
export declare class SubscriptionsOnPremisesCreateInput {
    user: UserCreateNestedOneWithoutSubscriptionsOnPremisesInput;
    premise: PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput;
    lastReadAt?: Date | undefined;
    type?: "AUTO" | "MANUAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
