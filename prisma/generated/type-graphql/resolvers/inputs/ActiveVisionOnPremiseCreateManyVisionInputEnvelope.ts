import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateManyVisionInput } from "../inputs/ActiveVisionOnPremiseCreateManyVisionInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateManyVisionInputEnvelope", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateManyVisionInputEnvelope {
  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateManyVisionInput], {
    nullable: false
  })
  data!: ActiveVisionOnPremiseCreateManyVisionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
