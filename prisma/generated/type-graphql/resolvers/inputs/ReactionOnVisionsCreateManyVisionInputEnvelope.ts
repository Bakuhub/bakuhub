import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCreateManyVisionInput } from "../inputs/ReactionOnVisionsCreateManyVisionInput";

@TypeGraphQL.InputType("ReactionOnVisionsCreateManyVisionInputEnvelope", {
  isAbstract: true
})
export class ReactionOnVisionsCreateManyVisionInputEnvelope {
  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateManyVisionInput], {
    nullable: false
  })
  data!: ReactionOnVisionsCreateManyVisionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
