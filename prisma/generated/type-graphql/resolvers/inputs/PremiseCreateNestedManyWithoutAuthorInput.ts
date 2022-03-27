import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateManyAuthorInputEnvelope } from "../inputs/PremiseCreateManyAuthorInputEnvelope";
import { PremiseCreateOrConnectWithoutAuthorInput } from "../inputs/PremiseCreateOrConnectWithoutAuthorInput";
import { PremiseCreateWithoutAuthorInput } from "../inputs/PremiseCreateWithoutAuthorInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class PremiseCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [PremiseCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: PremiseCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremiseCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: PremiseCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PremiseWhereUniqueInput], {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput[] | undefined;
}
