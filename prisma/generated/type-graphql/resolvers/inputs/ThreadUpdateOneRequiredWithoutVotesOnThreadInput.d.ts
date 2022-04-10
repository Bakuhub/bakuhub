import { ThreadCreateOrConnectWithoutVotesOnThreadInput } from "../inputs/ThreadCreateOrConnectWithoutVotesOnThreadInput";
import { ThreadCreateWithoutVotesOnThreadInput } from "../inputs/ThreadCreateWithoutVotesOnThreadInput";
import { ThreadUpdateWithoutVotesOnThreadInput } from "../inputs/ThreadUpdateWithoutVotesOnThreadInput";
import { ThreadUpsertWithoutVotesOnThreadInput } from "../inputs/ThreadUpsertWithoutVotesOnThreadInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadUpdateOneRequiredWithoutVotesOnThreadInput {
    create?: ThreadCreateWithoutVotesOnThreadInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutVotesOnThreadInput | undefined;
    upsert?: ThreadUpsertWithoutVotesOnThreadInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
    update?: ThreadUpdateWithoutVotesOnThreadInput | undefined;
}
