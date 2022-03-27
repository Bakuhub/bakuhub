import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseUpdateWithoutAuthorInput } from "../inputs/PremiseUpdateWithoutAuthorInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class PremiseUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: false
  })
  where!: PremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremiseUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: PremiseUpdateWithoutAuthorInput;
}
