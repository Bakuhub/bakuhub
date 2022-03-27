import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseScalarWhereInput} from "./PremiseScalarWhereInput";
import {PremiseUpdateManyMutationInput} from "./PremiseUpdateManyMutationInput";

@TypeGraphQL.InputType("PremiseUpdateManyWithWhereWithoutAuthorInput", {
    isAbstract: true
})
export class PremiseUpdateManyWithWhereWithoutAuthorInput {
    @TypeGraphQL.Field(_type => PremiseScalarWhereInput, {
        nullable: false
    })
    where!: PremiseScalarWhereInput;

    @TypeGraphQL.Field(_type => PremiseUpdateManyMutationInput, {
        nullable: false
    })
    data!: PremiseUpdateManyMutationInput;
}
