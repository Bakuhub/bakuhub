import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutThreadInput } from "../inputs/PremiseCreateOrConnectWithoutThreadInput";
import { PremiseCreateWithoutThreadInput } from "../inputs/PremiseCreateWithoutThreadInput";
import { PremiseUpdateWithoutThreadInput } from "../inputs/PremiseUpdateWithoutThreadInput";
import { PremiseUpsertWithoutThreadInput } from "../inputs/PremiseUpsertWithoutThreadInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutThreadInput", {
  isAbstract: true
})
export class PremiseUpdateOneRequiredWithoutThreadInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutThreadInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpsertWithoutThreadInput, {
    nullable: true
  })
  upsert?: PremiseUpsertWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateWithoutThreadInput, {
    nullable: true
  })
  update?: PremiseUpdateWithoutThreadInput | undefined;
}
