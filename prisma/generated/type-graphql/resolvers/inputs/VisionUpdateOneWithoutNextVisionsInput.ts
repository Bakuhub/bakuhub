import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateOrConnectWithoutNextVisionsInput } from "../inputs/VisionCreateOrConnectWithoutNextVisionsInput";
import { VisionCreateWithoutNextVisionsInput } from "../inputs/VisionCreateWithoutNextVisionsInput";
import { VisionUpdateWithoutNextVisionsInput } from "../inputs/VisionUpdateWithoutNextVisionsInput";
import { VisionUpsertWithoutNextVisionsInput } from "../inputs/VisionUpsertWithoutNextVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateOneWithoutNextVisionsInput", {
  isAbstract: true
})
export class VisionUpdateOneWithoutNextVisionsInput {
  @TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionsInput, {
    nullable: true
  })
  create?: VisionCreateWithoutNextVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutNextVisionsInput, {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutNextVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpsertWithoutNextVisionsInput, {
    nullable: true
  })
  upsert?: VisionUpsertWithoutNextVisionsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: true
  })
  connect?: VisionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateWithoutNextVisionsInput, {
    nullable: true
  })
  update?: VisionUpdateWithoutNextVisionsInput | undefined;
}
