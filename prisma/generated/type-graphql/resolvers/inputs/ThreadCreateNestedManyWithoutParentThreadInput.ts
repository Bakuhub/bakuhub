import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateManyParentThreadInputEnvelope} from "./ThreadCreateManyParentThreadInputEnvelope";
import {ThreadCreateOrConnectWithoutParentThreadInput} from "./ThreadCreateOrConnectWithoutParentThreadInput";
import {ThreadCreateWithoutParentThreadInput} from "./ThreadCreateWithoutParentThreadInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedManyWithoutParentThreadInput", {
    isAbstract: true
})
export class ThreadCreateNestedManyWithoutParentThreadInput {
    @TypeGraphQL.Field(_type => [ThreadCreateWithoutParentThreadInput], {
        nullable: true
    })
    create?: ThreadCreateWithoutParentThreadInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutParentThreadInput], {
        nullable: true
    })
    connectOrCreate?: ThreadCreateOrConnectWithoutParentThreadInput[] | undefined;

    @TypeGraphQL.Field(_type => ThreadCreateManyParentThreadInputEnvelope, {
        nullable: true
    })
    createMany?: ThreadCreateManyParentThreadInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
        nullable: true
    })
    connect?: ThreadWhereUniqueInput[] | undefined;
}
