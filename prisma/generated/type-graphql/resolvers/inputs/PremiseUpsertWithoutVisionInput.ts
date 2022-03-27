import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateWithoutVisionInput} from "./PremiseCreateWithoutVisionInput";
import {PremiseUpdateWithoutVisionInput} from "./PremiseUpdateWithoutVisionInput";

@TypeGraphQL.InputType("PremiseUpsertWithoutVisionInput", {
    isAbstract: true
})
export class PremiseUpsertWithoutVisionInput {
    @TypeGraphQL.Field(_type => PremiseUpdateWithoutVisionInput, {
        nullable: false
    })
    update!: PremiseUpdateWithoutVisionInput;

    @TypeGraphQL.Field(_type => PremiseCreateWithoutVisionInput, {
        nullable: false
    })
    create!: PremiseCreateWithoutVisionInput;
}
