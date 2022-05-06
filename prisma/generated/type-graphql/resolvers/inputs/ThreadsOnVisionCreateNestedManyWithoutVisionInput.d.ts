import { ThreadsOnVisionCreateManyVisionInputEnvelope } from "../inputs/ThreadsOnVisionCreateManyVisionInputEnvelope";
import { ThreadsOnVisionCreateOrConnectWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateOrConnectWithoutVisionInput";
import { ThreadsOnVisionCreateWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateWithoutVisionInput";
import { ThreadsOnVisionWhereUniqueInput } from "../inputs/ThreadsOnVisionWhereUniqueInput";
export declare class ThreadsOnVisionCreateNestedManyWithoutVisionInput {
    create?: ThreadsOnVisionCreateWithoutVisionInput[] | undefined;
    connectOrCreate?: ThreadsOnVisionCreateOrConnectWithoutVisionInput[] | undefined;
    createMany?: ThreadsOnVisionCreateManyVisionInputEnvelope | undefined;
    connect?: ThreadsOnVisionWhereUniqueInput[] | undefined;
}
