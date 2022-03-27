import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateWithoutAuthorInput} from "./PremiseCreateWithoutAuthorInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateOrConnectWithoutAuthorInput", {
    isAbstract: true
})
export class PremiseCreateOrConnectWithoutAuthorInput {
    @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
        nullable: false
    })
    where!: PremiseWhereUniqueInput;

    @TypeGraphQL.Field(_type => PremiseCreateWithoutAuthorInput, {
        nullable: false
    })
    create!: PremiseCreateWithoutAuthorInput;
}
