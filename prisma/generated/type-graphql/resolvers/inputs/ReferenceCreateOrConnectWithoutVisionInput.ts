import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceCreateWithoutVisionInput } from "../inputs/ReferenceCreateWithoutVisionInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.InputType("ReferenceCreateOrConnectWithoutVisionInput", {
  isAbstract: true
})
export class ReferenceCreateOrConnectWithoutVisionInput {
  @TypeGraphQL.Field(_type => ReferenceWhereUniqueInput, {
    nullable: false
  })
  where!: ReferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReferenceCreateWithoutVisionInput, {
    nullable: false
  })
  create!: ReferenceCreateWithoutVisionInput;
}
