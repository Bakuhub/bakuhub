import { ThreadsOnVisionCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateOrConnectWithoutThreadInput";
import { ThreadsOnVisionCreateWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateWithoutThreadInput";
import { ThreadsOnVisionUpdateWithoutThreadInput } from "../inputs/ThreadsOnVisionUpdateWithoutThreadInput";
import { ThreadsOnVisionUpsertWithoutThreadInput } from "../inputs/ThreadsOnVisionUpsertWithoutThreadInput";
import { ThreadsOnVisionWhereUniqueInput } from "../inputs/ThreadsOnVisionWhereUniqueInput";
export declare class ThreadsOnVisionUpdateOneWithoutThreadInput {
    create?: ThreadsOnVisionCreateWithoutThreadInput | undefined;
    connectOrCreate?: ThreadsOnVisionCreateOrConnectWithoutThreadInput | undefined;
    upsert?: ThreadsOnVisionUpsertWithoutThreadInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ThreadsOnVisionWhereUniqueInput | undefined;
    update?: ThreadsOnVisionUpdateWithoutThreadInput | undefined;
}
