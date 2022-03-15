import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateManyPremiseInputEnvelope } from "../inputs/ActiveVisionOnPremiseCreateManyPremiseInputEnvelope";
import { ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput";
import { ActiveVisionOnPremiseCreateWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseCreateWithoutPremiseInput";
import { ActiveVisionOnPremiseScalarWhereInput } from "../inputs/ActiveVisionOnPremiseScalarWhereInput";
import { ActiveVisionOnPremiseUpdateManyWithWhereWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseUpdateManyWithWhereWithoutPremiseInput";
import { ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutPremiseInput";
import { ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutPremiseInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseUpdateManyWithoutPremiseInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseUpdateManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: ActiveVisionOnPremiseCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  upsert?: ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: ActiveVisionOnPremiseCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseWhereUniqueInput], {
    nullable: true
  })
  set?: ActiveVisionOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ActiveVisionOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseWhereUniqueInput], {
    nullable: true
  })
  delete?: ActiveVisionOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseWhereUniqueInput], {
    nullable: true
  })
  connect?: ActiveVisionOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  update?: ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseUpdateManyWithWhereWithoutPremiseInput], {
    nullable: true
  })
  updateMany?: ActiveVisionOnPremiseUpdateManyWithWhereWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ActiveVisionOnPremiseScalarWhereInput[] | undefined;
}
