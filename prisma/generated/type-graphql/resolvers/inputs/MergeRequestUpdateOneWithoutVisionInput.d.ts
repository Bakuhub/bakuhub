import { MergeRequestCreateOrConnectWithoutVisionInput } from "../inputs/MergeRequestCreateOrConnectWithoutVisionInput";
import { MergeRequestCreateWithoutVisionInput } from "../inputs/MergeRequestCreateWithoutVisionInput";
import { MergeRequestUpdateWithoutVisionInput } from "../inputs/MergeRequestUpdateWithoutVisionInput";
import { MergeRequestUpsertWithoutVisionInput } from "../inputs/MergeRequestUpsertWithoutVisionInput";
import { MergeRequestWhereUniqueInput } from "../inputs/MergeRequestWhereUniqueInput";
export declare class MergeRequestUpdateOneWithoutVisionInput {
    create?: MergeRequestCreateWithoutVisionInput | undefined;
    connectOrCreate?: MergeRequestCreateOrConnectWithoutVisionInput | undefined;
    upsert?: MergeRequestUpsertWithoutVisionInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: MergeRequestWhereUniqueInput | undefined;
    update?: MergeRequestUpdateWithoutVisionInput | undefined;
}
