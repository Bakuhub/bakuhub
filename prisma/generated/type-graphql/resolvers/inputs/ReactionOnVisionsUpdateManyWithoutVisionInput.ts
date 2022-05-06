import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCreateManyVisionInputEnvelope } from "../inputs/ReactionOnVisionsCreateManyVisionInputEnvelope";
import { ReactionOnVisionsCreateOrConnectWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateOrConnectWithoutVisionInput";
import { ReactionOnVisionsCreateWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateWithoutVisionInput";
import { ReactionOnVisionsScalarWhereInput } from "../inputs/ReactionOnVisionsScalarWhereInput";
import { ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput } from "../inputs/ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput";
import { ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput } from "../inputs/ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput";
import { ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput } from "../inputs/ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsUpdateManyWithoutVisionInput", {
  isAbstract: true
})
export class ReactionOnVisionsUpdateManyWithoutVisionInput {
  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateWithoutVisionInput], {
    nullable: true
  })
  create?: ReactionOnVisionsCreateWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateOrConnectWithoutVisionInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnVisionsCreateOrConnectWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput], {
    nullable: true
  })
  upsert?: ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateManyVisionInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnVisionsCreateManyVisionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput], {
    nullable: true
  })
  set?: ReactionOnVisionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReactionOnVisionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput], {
    nullable: true
  })
  delete?: ReactionOnVisionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionOnVisionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput], {
    nullable: true
  })
  update?: ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput], {
    nullable: true
  })
  updateMany?: ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReactionOnVisionsScalarWhereInput[] | undefined;
}
