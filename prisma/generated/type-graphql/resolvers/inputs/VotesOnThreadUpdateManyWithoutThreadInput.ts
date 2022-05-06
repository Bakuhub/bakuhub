import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadCreateManyThreadInputEnvelope } from "../inputs/VotesOnThreadCreateManyThreadInputEnvelope";
import { VotesOnThreadCreateOrConnectWithoutThreadInput } from "../inputs/VotesOnThreadCreateOrConnectWithoutThreadInput";
import { VotesOnThreadCreateWithoutThreadInput } from "../inputs/VotesOnThreadCreateWithoutThreadInput";
import { VotesOnThreadScalarWhereInput } from "../inputs/VotesOnThreadScalarWhereInput";
import { VotesOnThreadUpdateManyWithWhereWithoutThreadInput } from "../inputs/VotesOnThreadUpdateManyWithWhereWithoutThreadInput";
import { VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput } from "../inputs/VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput";
import { VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput } from "../inputs/VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnThreadUpdateManyWithoutThreadInput", {
  isAbstract: true
})
export class VotesOnThreadUpdateManyWithoutThreadInput {
  @TypeGraphQL.Field(_type => [VotesOnThreadCreateWithoutThreadInput], {
    nullable: true
  })
  create?: VotesOnThreadCreateWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadCreateOrConnectWithoutThreadInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnThreadCreateOrConnectWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput], {
    nullable: true
  })
  upsert?: VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadCreateManyThreadInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnThreadCreateManyThreadInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput], {
    nullable: true
  })
  update?: VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadUpdateManyWithWhereWithoutThreadInput], {
    nullable: true
  })
  updateMany?: VotesOnThreadUpdateManyWithWhereWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VotesOnThreadScalarWhereInput[] | undefined;
}
