import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionUpdateWithoutPremiseInput} from "./VisionUpdateWithoutPremiseInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateWithWhereUniqueWithoutPremiseInput", {
    isAbstract: true
})
export class VisionUpdateWithWhereUniqueWithoutPremiseInput {
    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: false
    })
    where!: VisionWhereUniqueInput;

    @TypeGraphQL.Field(_type => VisionUpdateWithoutPremiseInput, {
        nullable: false
    })
    data!: VisionUpdateWithoutPremiseInput;
}
