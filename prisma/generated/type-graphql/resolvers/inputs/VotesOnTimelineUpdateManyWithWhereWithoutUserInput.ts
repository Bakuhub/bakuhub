import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineScalarWhereInput } from "../inputs/VotesOnTimelineScalarWhereInput";
import { VotesOnTimelineUpdateManyMutationInput } from "../inputs/VotesOnTimelineUpdateManyMutationInput";

@TypeGraphQL.InputType("VotesOnTimelineUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class VotesOnTimelineUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnTimelineScalarWhereInput, {
    nullable: false
  })
  where!: VotesOnTimelineScalarWhereInput;

  @TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyMutationInput, {
    nullable: false
  })
  data!: VotesOnTimelineUpdateManyMutationInput;
}
