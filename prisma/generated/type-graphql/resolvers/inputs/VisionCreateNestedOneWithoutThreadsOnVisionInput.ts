import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateOrConnectWithoutThreadsOnVisionInput} from "./VisionCreateOrConnectWithoutThreadsOnVisionInput";
import {VisionCreateWithoutThreadsOnVisionInput} from "./VisionCreateWithoutThreadsOnVisionInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedOneWithoutThreadsOnVisionInput", {
    isAbstract: true
})
export class VisionCreateNestedOneWithoutThreadsOnVisionInput {
    @TypeGraphQL.Field(_type => VisionCreateWithoutThreadsOnVisionInput, {
        nullable: true
    })
    create?: VisionCreateWithoutThreadsOnVisionInput | undefined;

    @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutThreadsOnVisionInput, {
        nullable: true
    })
    connectOrCreate?: VisionCreateOrConnectWithoutThreadsOnVisionInput | undefined;

    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: true
    })
    connect?: VisionWhereUniqueInput | undefined;
}
