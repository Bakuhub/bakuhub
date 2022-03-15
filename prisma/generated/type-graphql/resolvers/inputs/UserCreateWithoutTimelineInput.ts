import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedManyWithoutAuthorInput } from "../inputs/PremiseCreateNestedManyWithoutAuthorInput";
import { VisionCreateNestedManyWithoutAuthorInput } from "../inputs/VisionCreateNestedManyWithoutAuthorInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutTimelineInput", {
  isAbstract: true
})
export class UserCreateWithoutTimelineInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  premise?: PremiseCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  vision?: VisionCreateNestedManyWithoutAuthorInput | undefined;
}
