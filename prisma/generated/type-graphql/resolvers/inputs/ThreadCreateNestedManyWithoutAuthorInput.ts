import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateManyAuthorInputEnvelope} from "./ThreadCreateManyAuthorInputEnvelope";
import {ThreadCreateOrConnectWithoutAuthorInput} from "./ThreadCreateOrConnectWithoutAuthorInput";
import {ThreadCreateWithoutAuthorInput} from "./ThreadCreateWithoutAuthorInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedManyWithoutAuthorInput", {
    isAbstract: true
})
export class ThreadCreateNestedManyWithoutAuthorInput {
    @TypeGraphQL.Field(_type => [ThreadCreateWithoutAuthorInput], {
        nullable: true
    })
    create?: ThreadCreateWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutAuthorInput], {
        nullable: true
    })
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => ThreadCreateManyAuthorInputEnvelope, {
        nullable: true
    })
    createMany?: ThreadCreateManyAuthorInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
        nullable: true
    })
    connect?: ThreadWhereUniqueInput[] | undefined;
}
