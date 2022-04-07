import { ThreadCreateOrConnectWithoutThreadsOnPremiseInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnPremiseInput";
import { ThreadCreateWithoutThreadsOnPremiseInput } from "../inputs/ThreadCreateWithoutThreadsOnPremiseInput";
import { ThreadUpdateWithoutThreadsOnPremiseInput } from "../inputs/ThreadUpdateWithoutThreadsOnPremiseInput";
import { ThreadUpsertWithoutThreadsOnPremiseInput } from "../inputs/ThreadUpsertWithoutThreadsOnPremiseInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput {
    create?: ThreadCreateWithoutThreadsOnPremiseInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnPremiseInput | undefined;
    upsert?: ThreadUpsertWithoutThreadsOnPremiseInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
    update?: ThreadUpdateWithoutThreadsOnPremiseInput | undefined;
}
