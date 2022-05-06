import { ReactionOnThreadsCreateManyThreadInputEnvelope } from "../inputs/ReactionOnThreadsCreateManyThreadInputEnvelope";
import { ReactionOnThreadsCreateOrConnectWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateOrConnectWithoutThreadInput";
import { ReactionOnThreadsCreateWithoutThreadInput } from "../inputs/ReactionOnThreadsCreateWithoutThreadInput";
import { ReactionOnThreadsWhereUniqueInput } from "../inputs/ReactionOnThreadsWhereUniqueInput";
export declare class ReactionOnThreadsCreateNestedManyWithoutThreadInput {
    create?: ReactionOnThreadsCreateWithoutThreadInput[] | undefined;
    connectOrCreate?: ReactionOnThreadsCreateOrConnectWithoutThreadInput[] | undefined;
    createMany?: ReactionOnThreadsCreateManyThreadInputEnvelope | undefined;
    connect?: ReactionOnThreadsWhereUniqueInput[] | undefined;
}
