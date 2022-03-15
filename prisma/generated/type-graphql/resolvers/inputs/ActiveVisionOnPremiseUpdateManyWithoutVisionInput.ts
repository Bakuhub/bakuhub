import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateManyVisionInputEnvelope } from "../inputs/ActiveVisionOnPremiseCreateManyVisionInputEnvelope";
import { ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput";
import { ActiveVisionOnPremiseCreateWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseCreateWithoutVisionInput";
import { ActiveVisionOnPremiseScalarWhereInput } from "../inputs/ActiveVisionOnPremiseScalarWhereInput";
import { ActiveVisionOnPremiseUpdateManyWithWhereWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseUpdateManyWithWhereWithoutVisionInput";
import { ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutVisionInput";
import { ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutVisionInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseUpdateManyWithoutVisionInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseUpdateManyWithoutVisionInput {
  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateWithoutVisionInput], {
    nullable: true
  })
  create?: ActiveVisionOnPremiseCreateWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput], {
    nullable: true
  })
  connectOrCreate?: ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutVisionInput], {
    nullable: true
  })
  upsert?: ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateManyVisionInputEnvelope, {
    nullable: true
  })
  createMany?: ActiveVisionOnPremiseCreateManyVisionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutVisionInput], {
    nullable: true
  })
  update?: ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseUpdateManyWithWhereWithoutVisionInput], {
    nullable: true
  })
  updateMany?: ActiveVisionOnPremiseUpdateManyWithWhereWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ActiveVisionOnPremiseScalarWhereInput[] | undefined;
}
