import { ThreadsOnVisionCreateManyVisionInputEnvelope } from "../inputs/ThreadsOnVisionCreateManyVisionInputEnvelope";
import { ThreadsOnVisionCreateOrConnectWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateOrConnectWithoutVisionInput";
import { ThreadsOnVisionCreateWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateWithoutVisionInput";
import { ThreadsOnVisionScalarWhereInput } from "../inputs/ThreadsOnVisionScalarWhereInput";
import { ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput } from "../inputs/ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput";
import { ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput } from "../inputs/ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput";
import { ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput } from "../inputs/ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput";
import { ThreadsOnVisionWhereUniqueInput } from "../inputs/ThreadsOnVisionWhereUniqueInput";
export declare class ThreadsOnVisionUpdateManyWithoutVisionInput {
    create?: ThreadsOnVisionCreateWithoutVisionInput[] | undefined;
    connectOrCreate?: ThreadsOnVisionCreateOrConnectWithoutVisionInput[] | undefined;
    upsert?: ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput[] | undefined;
    createMany?: ThreadsOnVisionCreateManyVisionInputEnvelope | undefined;
    set?: ThreadsOnVisionWhereUniqueInput[] | undefined;
    disconnect?: ThreadsOnVisionWhereUniqueInput[] | undefined;
    delete?: ThreadsOnVisionWhereUniqueInput[] | undefined;
    connect?: ThreadsOnVisionWhereUniqueInput[] | undefined;
    update?: ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput[] | undefined;
    updateMany?: ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput[] | undefined;
    deleteMany?: ThreadsOnVisionScalarWhereInput[] | undefined;
}
