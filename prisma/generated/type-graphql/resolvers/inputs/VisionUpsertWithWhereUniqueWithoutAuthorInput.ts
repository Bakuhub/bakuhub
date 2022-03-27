import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateWithoutAuthorInput} from "./VisionCreateWithoutAuthorInput";
import {VisionUpdateWithoutAuthorInput} from "./VisionUpdateWithoutAuthorInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpsertWithWhereUniqueWithoutAuthorInput", {
    isAbstract: true
})
export class VisionUpsertWithWhereUniqueWithoutAuthorInput {
    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: false
    })
    where!: VisionWhereUniqueInput;

    @TypeGraphQL.Field(_type => VisionUpdateWithoutAuthorInput, {
        nullable: false
    })
    update!: VisionUpdateWithoutAuthorInput;

    @TypeGraphQL.Field(_type => VisionCreateWithoutAuthorInput, {
        nullable: false
    })
    create!: VisionCreateWithoutAuthorInput;
}
