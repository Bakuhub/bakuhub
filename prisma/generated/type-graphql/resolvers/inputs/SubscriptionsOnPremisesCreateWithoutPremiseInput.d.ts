import { UserCreateNestedOneWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateNestedOneWithoutSubscriptionsOnPremisesInput";
export declare class SubscriptionsOnPremisesCreateWithoutPremiseInput {
    user: UserCreateNestedOneWithoutSubscriptionsOnPremisesInput;
    lastReadAt?: Date | undefined;
    type?: "AUTO" | "MANUAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
