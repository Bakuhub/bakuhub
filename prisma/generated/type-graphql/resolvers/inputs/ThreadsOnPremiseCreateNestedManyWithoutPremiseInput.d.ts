import { ThreadsOnPremiseCreateManyPremiseInputEnvelope } from "../inputs/ThreadsOnPremiseCreateManyPremiseInputEnvelope";
import { ThreadsOnPremiseCreateOrConnectWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateOrConnectWithoutPremiseInput";
import { ThreadsOnPremiseCreateWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateWithoutPremiseInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../inputs/ThreadsOnPremiseWhereUniqueInput";
export declare class ThreadsOnPremiseCreateNestedManyWithoutPremiseInput {
    create?: ThreadsOnPremiseCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: ThreadsOnPremiseCreateOrConnectWithoutPremiseInput[] | undefined;
    createMany?: ThreadsOnPremiseCreateManyPremiseInputEnvelope | undefined;
    connect?: ThreadsOnPremiseWhereUniqueInput[] | undefined;
}
