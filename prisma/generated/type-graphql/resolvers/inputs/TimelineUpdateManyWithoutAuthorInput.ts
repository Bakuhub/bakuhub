import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateManyAuthorInputEnvelope } from "../inputs/TimelineCreateManyAuthorInputEnvelope";
import { TimelineCreateOrConnectWithoutAuthorInput } from "../inputs/TimelineCreateOrConnectWithoutAuthorInput";
import { TimelineCreateWithoutAuthorInput } from "../inputs/TimelineCreateWithoutAuthorInput";
import { TimelineScalarWhereInput } from "../inputs/TimelineScalarWhereInput";
import { TimelineUpdateManyWithWhereWithoutAuthorInput } from "../inputs/TimelineUpdateManyWithWhereWithoutAuthorInput";
import { TimelineUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/TimelineUpdateWithWhereUniqueWithoutAuthorInput";
import { TimelineUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/TimelineUpsertWithWhereUniqueWithoutAuthorInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class TimelineUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [TimelineCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: TimelineCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: TimelineUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: TimelineCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TimelineWhereUniqueInput], {
    nullable: true
  })
  set?: TimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineWhereUniqueInput], {
    nullable: true
  })
  delete?: TimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineWhereUniqueInput], {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: TimelineUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: TimelineUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TimelineScalarWhereInput[] | undefined;
}
