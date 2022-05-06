import { MergeRequestCreateOrConnectWithoutVisionInput } from "../inputs/MergeRequestCreateOrConnectWithoutVisionInput";
import { MergeRequestCreateWithoutVisionInput } from "../inputs/MergeRequestCreateWithoutVisionInput";
import { MergeRequestWhereUniqueInput } from "../inputs/MergeRequestWhereUniqueInput";
export declare class MergeRequestCreateNestedOneWithoutVisionInput {
    create?: MergeRequestCreateWithoutVisionInput | undefined;
    connectOrCreate?: MergeRequestCreateOrConnectWithoutVisionInput | undefined;
    connect?: MergeRequestWhereUniqueInput | undefined;
}
