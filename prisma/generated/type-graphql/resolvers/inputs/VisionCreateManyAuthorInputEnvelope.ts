import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateManyAuthorInput } from "../inputs/VisionCreateManyAuthorInput";

@TypeGraphQL.InputType("VisionCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class VisionCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [VisionCreateManyAuthorInput], {
    nullable: false
  })
  data!: VisionCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
