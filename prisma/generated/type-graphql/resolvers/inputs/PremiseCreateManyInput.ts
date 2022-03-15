import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseStatus } from "../../enums/PremiseStatus";

@TypeGraphQL.InputType("PremiseCreateManyInput", {
  isAbstract: true
})
export class PremiseCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PremiseStatus, {
    nullable: false
  })
  status!: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;
}
