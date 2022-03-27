import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnPremiseCreateManyPremiseInputEnvelope} from "./ThreadsOnPremiseCreateManyPremiseInputEnvelope";
import {ThreadsOnPremiseCreateOrConnectWithoutPremiseInput} from "./ThreadsOnPremiseCreateOrConnectWithoutPremiseInput";
import {ThreadsOnPremiseCreateWithoutPremiseInput} from "./ThreadsOnPremiseCreateWithoutPremiseInput";
import {ThreadsOnPremiseWhereUniqueInput} from "./ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnPremiseCreateNestedManyWithoutPremiseInput", {
    isAbstract: true
})
export class ThreadsOnPremiseCreateNestedManyWithoutPremiseInput {
    @TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateWithoutPremiseInput], {
        nullable: true
    })
    create?: ThreadsOnPremiseCreateWithoutPremiseInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateOrConnectWithoutPremiseInput], {
        nullable: true
    })
    connectOrCreate?: ThreadsOnPremiseCreateOrConnectWithoutPremiseInput[] | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateManyPremiseInputEnvelope, {
        nullable: true
    })
    createMany?: ThreadsOnPremiseCreateManyPremiseInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereUniqueInput], {
        nullable: true
    })
    connect?: ThreadsOnPremiseWhereUniqueInput[] | undefined;
}
