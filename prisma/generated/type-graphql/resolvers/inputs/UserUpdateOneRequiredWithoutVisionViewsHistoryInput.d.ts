import { UserCreateOrConnectWithoutVisionViewsHistoryInput } from "../inputs/UserCreateOrConnectWithoutVisionViewsHistoryInput";
import { UserCreateWithoutVisionViewsHistoryInput } from "../inputs/UserCreateWithoutVisionViewsHistoryInput";
import { UserUpdateWithoutVisionViewsHistoryInput } from "../inputs/UserUpdateWithoutVisionViewsHistoryInput";
import { UserUpsertWithoutVisionViewsHistoryInput } from "../inputs/UserUpsertWithoutVisionViewsHistoryInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutVisionViewsHistoryInput {
    create?: UserCreateWithoutVisionViewsHistoryInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutVisionViewsHistoryInput | undefined;
    upsert?: UserUpsertWithoutVisionViewsHistoryInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutVisionViewsHistoryInput | undefined;
}
