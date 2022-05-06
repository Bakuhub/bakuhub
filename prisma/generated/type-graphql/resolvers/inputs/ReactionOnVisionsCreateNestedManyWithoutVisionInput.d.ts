import { ReactionOnVisionsCreateManyVisionInputEnvelope } from "../inputs/ReactionOnVisionsCreateManyVisionInputEnvelope";
import { ReactionOnVisionsCreateOrConnectWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateOrConnectWithoutVisionInput";
import { ReactionOnVisionsCreateWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateWithoutVisionInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";
export declare class ReactionOnVisionsCreateNestedManyWithoutVisionInput {
    create?: ReactionOnVisionsCreateWithoutVisionInput[] | undefined;
    connectOrCreate?: ReactionOnVisionsCreateOrConnectWithoutVisionInput[] | undefined;
    createMany?: ReactionOnVisionsCreateManyVisionInputEnvelope | undefined;
    connect?: ReactionOnVisionsWhereUniqueInput[] | undefined;
}
