import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesCreateManyTagInput } from "../inputs/TagsOnTimelinesCreateManyTagInput";

@TypeGraphQL.InputType("TagsOnTimelinesCreateManyTagInputEnvelope", {
  isAbstract: true
})
export class TagsOnTimelinesCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateManyTagInput], {
    nullable: false
  })
  data!: TagsOnTimelinesCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
