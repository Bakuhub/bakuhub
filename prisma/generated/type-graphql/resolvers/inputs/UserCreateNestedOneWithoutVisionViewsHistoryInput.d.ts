import { UserCreateOrConnectWithoutVisionViewsHistoryInput } from "../inputs/UserCreateOrConnectWithoutVisionViewsHistoryInput";
import { UserCreateWithoutVisionViewsHistoryInput } from "../inputs/UserCreateWithoutVisionViewsHistoryInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutVisionViewsHistoryInput {
    create?: UserCreateWithoutVisionViewsHistoryInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVisionViewsHistoryInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
