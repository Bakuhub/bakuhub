import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceCreateWithoutVisionInput } from "../inputs/ReferenceCreateWithoutVisionInput";
import { ReferenceUpdateWithoutVisionInput } from "../inputs/ReferenceUpdateWithoutVisionInput";

@TypeGraphQL.InputType("ReferenceUpsertWithoutVisionInput", {
  isAbstract: true
})
export class ReferenceUpsertWithoutVisionInput {
  @TypeGraphQL.Field(_type => ReferenceUpdateWithoutVisionInput, {
    nullable: false
  })
  update!: ReferenceUpdateWithoutVisionInput;

  @TypeGraphQL.Field(_type => ReferenceCreateWithoutVisionInput, {
    nullable: false
  })
  create!: ReferenceCreateWithoutVisionInput;
}
