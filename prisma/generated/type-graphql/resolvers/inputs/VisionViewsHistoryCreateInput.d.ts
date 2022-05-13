import { UserCreateNestedOneWithoutVisionViewsHistoryInput } from "../inputs/UserCreateNestedOneWithoutVisionViewsHistoryInput";
import { VisionCreateNestedOneWithoutVisionViewsHistoryInput } from "../inputs/VisionCreateNestedOneWithoutVisionViewsHistoryInput";
export declare class VisionViewsHistoryCreateInput {
    id?: string | undefined;
    vision: VisionCreateNestedOneWithoutVisionViewsHistoryInput;
    user: UserCreateNestedOneWithoutVisionViewsHistoryInput;
    createdAt?: Date | undefined;
}
