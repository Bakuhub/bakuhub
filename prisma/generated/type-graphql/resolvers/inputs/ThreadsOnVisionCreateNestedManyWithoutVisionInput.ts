import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnVisionCreateManyVisionInputEnvelope } from "../inputs/ThreadsOnVisionCreateManyVisionInputEnvelope";
import { ThreadsOnVisionCreateOrConnectWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateOrConnectWithoutVisionInput";
import { ThreadsOnVisionCreateWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateWithoutVisionInput";
import { ThreadsOnVisionWhereUniqueInput } from "../inputs/ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnVisionCreateNestedManyWithoutVisionInput", {
  isAbstract: true
})
export class ThreadsOnVisionCreateNestedManyWithoutVisionInput {
  @TypeGraphQL.Field(_type => [ThreadsOnVisionCreateWithoutVisionInput], {
    nullable: true
  })
  create?: ThreadsOnVisionCreateWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionCreateOrConnectWithoutVisionInput], {
    nullable: true
  })
  connectOrCreate?: ThreadsOnVisionCreateOrConnectWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateManyVisionInputEnvelope, {
    nullable: true
  })
  createMany?: ThreadsOnVisionCreateManyVisionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionWhereUniqueInput], {
    nullable: true
  })
  connect?: ThreadsOnVisionWhereUniqueInput[] | undefined;
}
