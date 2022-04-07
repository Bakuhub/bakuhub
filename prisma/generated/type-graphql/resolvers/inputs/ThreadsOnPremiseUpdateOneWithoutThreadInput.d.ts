import { ThreadsOnPremiseCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnPremiseCreateOrConnectWithoutThreadInput";
import { ThreadsOnPremiseCreateWithoutThreadInput } from "../inputs/ThreadsOnPremiseCreateWithoutThreadInput";
import { ThreadsOnPremiseUpdateWithoutThreadInput } from "../inputs/ThreadsOnPremiseUpdateWithoutThreadInput";
import { ThreadsOnPremiseUpsertWithoutThreadInput } from "../inputs/ThreadsOnPremiseUpsertWithoutThreadInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../inputs/ThreadsOnPremiseWhereUniqueInput";
export declare class ThreadsOnPremiseUpdateOneWithoutThreadInput {
    create?: ThreadsOnPremiseCreateWithoutThreadInput | undefined;
    connectOrCreate?: ThreadsOnPremiseCreateOrConnectWithoutThreadInput | undefined;
    upsert?: ThreadsOnPremiseUpsertWithoutThreadInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ThreadsOnPremiseWhereUniqueInput | undefined;
    update?: ThreadsOnPremiseUpdateWithoutThreadInput | undefined;
}
