import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCreateManyVisionInputEnvelope } from "../inputs/ReactionOnVisionsCreateManyVisionInputEnvelope";
import { ReactionOnVisionsCreateOrConnectWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateOrConnectWithoutVisionInput";
import { ReactionOnVisionsCreateWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateWithoutVisionInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsCreateNestedManyWithoutVisionInput", {
  isAbstract: true
})
export class ReactionOnVisionsCreateNestedManyWithoutVisionInput {
  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateWithoutVisionInput], {
    nullable: true
  })
  create?: ReactionOnVisionsCreateWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateOrConnectWithoutVisionInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnVisionsCreateOrConnectWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateManyVisionInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnVisionsCreateManyVisionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionOnVisionsWhereUniqueInput[] | undefined;
}
