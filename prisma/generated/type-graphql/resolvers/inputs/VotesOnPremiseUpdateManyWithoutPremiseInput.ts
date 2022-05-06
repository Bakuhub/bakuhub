import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseCreateManyPremiseInputEnvelope } from "../inputs/VotesOnPremiseCreateManyPremiseInputEnvelope";
import { VotesOnPremiseCreateOrConnectWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateOrConnectWithoutPremiseInput";
import { VotesOnPremiseCreateWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateWithoutPremiseInput";
import { VotesOnPremiseScalarWhereInput } from "../inputs/VotesOnPremiseScalarWhereInput";
import { VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput } from "../inputs/VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput";
import { VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput";
import { VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseUpdateManyWithoutPremiseInput", {
  isAbstract: true
})
export class VotesOnPremiseUpdateManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: VotesOnPremiseCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnPremiseCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  upsert?: VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnPremiseCreateManyPremiseInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  update?: VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput], {
    nullable: true
  })
  updateMany?: VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VotesOnPremiseScalarWhereInput[] | undefined;
}
