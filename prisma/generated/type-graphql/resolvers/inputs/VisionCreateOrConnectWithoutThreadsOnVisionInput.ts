import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateWithoutThreadsOnVisionInput} from "./VisionCreateWithoutThreadsOnVisionInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutThreadsOnVisionInput", {
    isAbstract: true
})
export class VisionCreateOrConnectWithoutThreadsOnVisionInput {
    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: false
    })
    where!: VisionWhereUniqueInput;

    @TypeGraphQL.Field(_type => VisionCreateWithoutThreadsOnVisionInput, {
        nullable: false
    })
    create!: VisionCreateWithoutThreadsOnVisionInput;
}
