import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateManyPremiseInput } from "../inputs/ActiveVisionOnPremiseCreateManyPremiseInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateManyPremiseInputEnvelope", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateManyPremiseInputEnvelope {
  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateManyPremiseInput], {
    nullable: false
  })
  data!: ActiveVisionOnPremiseCreateManyPremiseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
