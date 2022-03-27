import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateWithoutAuthorInput} from "./PremiseCreateWithoutAuthorInput";
import {PremiseUpdateWithoutAuthorInput} from "./PremiseUpdateWithoutAuthorInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpsertWithWhereUniqueWithoutAuthorInput", {
    isAbstract: true
})
export class PremiseUpsertWithWhereUniqueWithoutAuthorInput {
    @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
        nullable: false
    })
    where!: PremiseWhereUniqueInput;

    @TypeGraphQL.Field(_type => PremiseUpdateWithoutAuthorInput, {
        nullable: false
    })
    update!: PremiseUpdateWithoutAuthorInput;

    @TypeGraphQL.Field(_type => PremiseCreateWithoutAuthorInput, {
        nullable: false
    })
    create!: PremiseCreateWithoutAuthorInput;
}
