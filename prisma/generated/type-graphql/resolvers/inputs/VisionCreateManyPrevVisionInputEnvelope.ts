import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateManyPrevVisionInput } from "../inputs/VisionCreateManyPrevVisionInput";

@TypeGraphQL.InputType("VisionCreateManyPrevVisionInputEnvelope", {
  isAbstract: true
})
export class VisionCreateManyPrevVisionInputEnvelope {
  @TypeGraphQL.Field(_type => [VisionCreateManyPrevVisionInput], {
    nullable: false
  })
  data!: VisionCreateManyPrevVisionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
