import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateWithoutThreadsOnVisionInput} from "./VisionCreateWithoutThreadsOnVisionInput";
import {VisionUpdateWithoutThreadsOnVisionInput} from "./VisionUpdateWithoutThreadsOnVisionInput";

@TypeGraphQL.InputType("VisionUpsertWithoutThreadsOnVisionInput", {
    isAbstract: true
})
export class VisionUpsertWithoutThreadsOnVisionInput {
    @TypeGraphQL.Field(_type => VisionUpdateWithoutThreadsOnVisionInput, {
        nullable: false
    })
    update!: VisionUpdateWithoutThreadsOnVisionInput;

    @TypeGraphQL.Field(_type => VisionCreateWithoutThreadsOnVisionInput, {
        nullable: false
    })
    create!: VisionCreateWithoutThreadsOnVisionInput;
}
