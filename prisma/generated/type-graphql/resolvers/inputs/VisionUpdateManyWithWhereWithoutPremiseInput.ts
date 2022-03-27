import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionScalarWhereInput} from "./VisionScalarWhereInput";
import {VisionUpdateManyMutationInput} from "./VisionUpdateManyMutationInput";

@TypeGraphQL.InputType("VisionUpdateManyWithWhereWithoutPremiseInput", {
    isAbstract: true
})
export class VisionUpdateManyWithWhereWithoutPremiseInput {
    @TypeGraphQL.Field(_type => VisionScalarWhereInput, {
        nullable: false
    })
    where!: VisionScalarWhereInput;

    @TypeGraphQL.Field(_type => VisionUpdateManyMutationInput, {
        nullable: false
    })
    data!: VisionUpdateManyMutationInput;
}
