import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateNestedManyWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseCreateNestedManyWithoutVisionInput";
import { PremiseCreateNestedOneWithoutVisionInput } from "../inputs/PremiseCreateNestedOneWithoutVisionInput";
import { UserCreateNestedOneWithoutVisionInput } from "../inputs/UserCreateNestedOneWithoutVisionInput";

@TypeGraphQL.InputType("VisionCreateInput", {
  isAbstract: true
})
export class VisionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  activityDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reference!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVisionInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutVisionInput;

  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutVisionInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutVisionInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateNestedManyWithoutVisionInput, {
    nullable: true
  })
  activeVisionOnPremise?: ActiveVisionOnPremiseCreateNestedManyWithoutVisionInput | undefined;
}
