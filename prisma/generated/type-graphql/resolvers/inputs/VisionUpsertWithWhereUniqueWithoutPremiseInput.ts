import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateWithoutPremiseInput} from "./VisionCreateWithoutPremiseInput";
import {VisionUpdateWithoutPremiseInput} from "./VisionUpdateWithoutPremiseInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpsertWithWhereUniqueWithoutPremiseInput", {
    isAbstract: true
})
export class VisionUpsertWithWhereUniqueWithoutPremiseInput {
    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: false
    })
    where!: VisionWhereUniqueInput;

    @TypeGraphQL.Field(_type => VisionUpdateWithoutPremiseInput, {
        nullable: false
    })
    update!: VisionUpdateWithoutPremiseInput;

    @TypeGraphQL.Field(_type => VisionCreateWithoutPremiseInput, {
        nullable: false
    })
    create!: VisionCreateWithoutPremiseInput;
}
