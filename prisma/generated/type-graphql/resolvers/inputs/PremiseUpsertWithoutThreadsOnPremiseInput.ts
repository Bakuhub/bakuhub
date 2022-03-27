import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateWithoutThreadsOnPremiseInput} from "./PremiseCreateWithoutThreadsOnPremiseInput";
import {PremiseUpdateWithoutThreadsOnPremiseInput} from "./PremiseUpdateWithoutThreadsOnPremiseInput";

@TypeGraphQL.InputType("PremiseUpsertWithoutThreadsOnPremiseInput", {
    isAbstract: true
})
export class PremiseUpsertWithoutThreadsOnPremiseInput {
    @TypeGraphQL.Field(_type => PremiseUpdateWithoutThreadsOnPremiseInput, {
        nullable: false
    })
    update!: PremiseUpdateWithoutThreadsOnPremiseInput;

    @TypeGraphQL.Field(_type => PremiseCreateWithoutThreadsOnPremiseInput, {
        nullable: false
    })
    create!: PremiseCreateWithoutThreadsOnPremiseInput;
}
