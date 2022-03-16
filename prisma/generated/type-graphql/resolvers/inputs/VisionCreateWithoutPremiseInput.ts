import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutVisionInput } from "../inputs/UserCreateNestedOneWithoutVisionInput";
import { VisionCreateNestedManyWithoutPrevVisionInput } from "../inputs/VisionCreateNestedManyWithoutPrevVisionInput";
import { VisionCreateNestedOneWithoutNextVisionInput } from "../inputs/VisionCreateNestedOneWithoutNextVisionInput";

@TypeGraphQL.InputType("VisionCreateWithoutPremiseInput", {
  isAbstract: true
})
export class VisionCreateWithoutPremiseInput {
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
    nullable: true
  })
  author?: UserCreateNestedOneWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutNextVisionInput, {
    nullable: true
  })
  prevVision?: VisionCreateNestedOneWithoutNextVisionInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPrevVisionInput, {
    nullable: true
  })
  nextVision?: VisionCreateNestedManyWithoutPrevVisionInput | undefined;
}
