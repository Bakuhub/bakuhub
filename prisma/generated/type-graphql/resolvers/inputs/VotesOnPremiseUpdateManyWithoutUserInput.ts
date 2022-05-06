import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseCreateManyUserInputEnvelope } from "../inputs/VotesOnPremiseCreateManyUserInputEnvelope";
import { VotesOnPremiseCreateOrConnectWithoutUserInput } from "../inputs/VotesOnPremiseCreateOrConnectWithoutUserInput";
import { VotesOnPremiseCreateWithoutUserInput } from "../inputs/VotesOnPremiseCreateWithoutUserInput";
import { VotesOnPremiseScalarWhereInput } from "../inputs/VotesOnPremiseScalarWhereInput";
import { VotesOnPremiseUpdateManyWithWhereWithoutUserInput } from "../inputs/VotesOnPremiseUpdateManyWithWhereWithoutUserInput";
import { VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput";
import { VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class VotesOnPremiseUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateWithoutUserInput], {
    nullable: true
  })
  create?: VotesOnPremiseCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnPremiseCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnPremiseCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput], {
    nullable: true
  })
  set?: VotesOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VotesOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput], {
    nullable: true
  })
  delete?: VotesOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: VotesOnPremiseUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VotesOnPremiseScalarWhereInput[] | undefined;
}
