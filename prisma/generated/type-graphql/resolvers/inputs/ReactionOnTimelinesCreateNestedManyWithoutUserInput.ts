import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCreateManyUserInputEnvelope } from "../inputs/ReactionOnTimelinesCreateManyUserInputEnvelope";
import { ReactionOnTimelinesCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateOrConnectWithoutUserInput";
import { ReactionOnTimelinesCreateWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateWithoutUserInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnTimelinesCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReactionOnTimelinesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReactionOnTimelinesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReactionOnTimelinesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  connect?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
}
