import { VisionViewsHistoryCreateManyUserInputEnvelope } from "../inputs/VisionViewsHistoryCreateManyUserInputEnvelope";
import { VisionViewsHistoryCreateOrConnectWithoutUserInput } from "../inputs/VisionViewsHistoryCreateOrConnectWithoutUserInput";
import { VisionViewsHistoryCreateWithoutUserInput } from "../inputs/VisionViewsHistoryCreateWithoutUserInput";
import { VisionViewsHistoryWhereUniqueInput } from "../inputs/VisionViewsHistoryWhereUniqueInput";
export declare class VisionViewsHistoryCreateNestedManyWithoutUserInput {
    create?: VisionViewsHistoryCreateWithoutUserInput[] | undefined;
    connectOrCreate?: VisionViewsHistoryCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: VisionViewsHistoryCreateManyUserInputEnvelope | undefined;
    connect?: VisionViewsHistoryWhereUniqueInput[] | undefined;
}
