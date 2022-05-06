import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadCreateManyUserInputEnvelope } from "../inputs/VotesOnThreadCreateManyUserInputEnvelope";
import { VotesOnThreadCreateOrConnectWithoutUserInput } from "../inputs/VotesOnThreadCreateOrConnectWithoutUserInput";
import { VotesOnThreadCreateWithoutUserInput } from "../inputs/VotesOnThreadCreateWithoutUserInput";
import { VotesOnThreadScalarWhereInput } from "../inputs/VotesOnThreadScalarWhereInput";
import { VotesOnThreadUpdateManyWithWhereWithoutUserInput } from "../inputs/VotesOnThreadUpdateManyWithWhereWithoutUserInput";
import { VotesOnThreadUpdateWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnThreadUpdateWithWhereUniqueWithoutUserInput";
import { VotesOnThreadUpsertWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnThreadUpsertWithWhereUniqueWithoutUserInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnThreadUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class VotesOnThreadUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [VotesOnThreadCreateWithoutUserInput], {
    nullable: true
  })
  create?: VotesOnThreadCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnThreadCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: VotesOnThreadUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnThreadCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput], {
    nullable: true
  })
  set?: VotesOnThreadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VotesOnThreadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput], {
    nullable: true
  })
  delete?: VotesOnThreadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnThreadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: VotesOnThreadUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: VotesOnThreadUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VotesOnThreadScalarWhereInput[] | undefined;
}
