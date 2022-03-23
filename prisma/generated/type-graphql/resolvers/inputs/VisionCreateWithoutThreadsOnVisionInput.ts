import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutVisionInput } from "../inputs/PremiseCreateNestedOneWithoutVisionInput";
import { UserCreateNestedOneWithoutVisionInput } from "../inputs/UserCreateNestedOneWithoutVisionInput";
import { VisionCreateNestedManyWithoutPrevVisionInput } from "../inputs/VisionCreateNestedManyWithoutPrevVisionInput";
import { VisionCreateNestedOneWithoutNextVisionInput } from "../inputs/VisionCreateNestedOneWithoutNextVisionInput";

@TypeGraphQL.InputType("VisionCreateWithoutThreadsOnVisionInput", {
  isAbstract: true
})
export class VisionCreateWithoutThreadsOnVisionInput {
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
  activityDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reference?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVisionInput, {
    nullable: true
  })
  author?: UserCreateNestedOneWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutVisionInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutVisionInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutNextVisionInput, {
    nullable: true
  })
  prevVision?: VisionCreateNestedOneWithoutNextVisionInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPrevVisionInput, {
    nullable: true
  })
  nextVision?: VisionCreateNestedManyWithoutPrevVisionInput | undefined;
}
