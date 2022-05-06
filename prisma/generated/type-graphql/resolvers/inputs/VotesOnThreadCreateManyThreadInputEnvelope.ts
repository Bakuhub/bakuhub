import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadCreateManyThreadInput } from "../inputs/VotesOnThreadCreateManyThreadInput";

@TypeGraphQL.InputType("VotesOnThreadCreateManyThreadInputEnvelope", {
  isAbstract: true
})
export class VotesOnThreadCreateManyThreadInputEnvelope {
  @TypeGraphQL.Field(_type => [VotesOnThreadCreateManyThreadInput], {
    nullable: false
  })
  data!: VotesOnThreadCreateManyThreadInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
