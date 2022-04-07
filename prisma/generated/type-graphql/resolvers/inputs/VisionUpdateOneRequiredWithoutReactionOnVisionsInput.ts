import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateOrConnectWithoutReactionOnVisionsInput } from "../inputs/VisionCreateOrConnectWithoutReactionOnVisionsInput";
import { VisionCreateWithoutReactionOnVisionsInput } from "../inputs/VisionCreateWithoutReactionOnVisionsInput";
import { VisionUpdateWithoutReactionOnVisionsInput } from "../inputs/VisionUpdateWithoutReactionOnVisionsInput";
import { VisionUpsertWithoutReactionOnVisionsInput } from "../inputs/VisionUpsertWithoutReactionOnVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutReactionOnVisionsInput", {
  isAbstract: true
})
export class VisionUpdateOneRequiredWithoutReactionOnVisionsInput {
  @TypeGraphQL.Field(_type => VisionCreateWithoutReactionOnVisionsInput, {
    nullable: true
  })
  create?: VisionCreateWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutReactionOnVisionsInput, {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpsertWithoutReactionOnVisionsInput, {
    nullable: true
  })
  upsert?: VisionUpsertWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: true
  })
  connect?: VisionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateWithoutReactionOnVisionsInput, {
    nullable: true
  })
  update?: VisionUpdateWithoutReactionOnVisionsInput | undefined;
}
