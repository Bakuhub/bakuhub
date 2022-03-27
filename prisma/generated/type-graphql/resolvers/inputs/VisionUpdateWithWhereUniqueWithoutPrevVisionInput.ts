import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionUpdateWithoutPrevVisionInput} from "./VisionUpdateWithoutPrevVisionInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateWithWhereUniqueWithoutPrevVisionInput", {
    isAbstract: true
})
export class VisionUpdateWithWhereUniqueWithoutPrevVisionInput {
    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: false
    })
    where!: VisionWhereUniqueInput;

    @TypeGraphQL.Field(_type => VisionUpdateWithoutPrevVisionInput, {
        nullable: false
    })
    data!: VisionUpdateWithoutPrevVisionInput;
}
