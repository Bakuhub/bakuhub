import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateWithoutPremiseInput} from "./VisionCreateWithoutPremiseInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutPremiseInput", {
    isAbstract: true
})
export class VisionCreateOrConnectWithoutPremiseInput {
    @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
        nullable: false
    })
    where!: VisionWhereUniqueInput;

    @TypeGraphQL.Field(_type => VisionCreateWithoutPremiseInput, {
        nullable: false
    })
    create!: VisionCreateWithoutPremiseInput;
}
