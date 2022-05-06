import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateOrConnectWithoutVotesOnPremiseInput";
import { PremiseCreateWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateWithoutVotesOnPremiseInput";
import { PremiseUpdateWithoutVotesOnPremiseInput } from "../inputs/PremiseUpdateWithoutVotesOnPremiseInput";
import { PremiseUpsertWithoutVotesOnPremiseInput } from "../inputs/PremiseUpsertWithoutVotesOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutVotesOnPremiseInput", {
  isAbstract: true
})
export class PremiseUpdateOneRequiredWithoutVotesOnPremiseInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutVotesOnPremiseInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutVotesOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutVotesOnPremiseInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutVotesOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpsertWithoutVotesOnPremiseInput, {
    nullable: true
  })
  upsert?: PremiseUpsertWithoutVotesOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateWithoutVotesOnPremiseInput, {
    nullable: true
  })
  update?: PremiseUpdateWithoutVotesOnPremiseInput | undefined;
}
