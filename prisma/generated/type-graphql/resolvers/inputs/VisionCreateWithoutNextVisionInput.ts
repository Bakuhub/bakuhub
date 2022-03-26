import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateNestedOneWithoutVisionInput } from "../inputs/MergeRequestCreateNestedOneWithoutVisionInput";
import { PremiseCreateNestedOneWithoutVisionInput } from "../inputs/PremiseCreateNestedOneWithoutVisionInput";
import { ThreadsOnVisionCreateNestedManyWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateNestedManyWithoutVisionInput";
import { UserCreateNestedOneWithoutVisionInput } from "../inputs/UserCreateNestedOneWithoutVisionInput";
import { VisionCreateNestedOneWithoutNextVisionInput } from "../inputs/VisionCreateNestedOneWithoutNextVisionInput";

@TypeGraphQL.InputType("VisionCreateWithoutNextVisionInput", {
  isAbstract: true
})
export class VisionCreateWithoutNextVisionInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  draftMode?: boolean | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutNextVisionInput, {
    nullable: true
  })
  prevVision?: VisionCreateNestedOneWithoutNextVisionInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateNestedManyWithoutVisionInput, {
    nullable: true
  })
  threadsOnVision?: ThreadsOnVisionCreateNestedManyWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestCreateNestedOneWithoutVisionInput, {
    nullable: true
  })
  mergeRequest?: MergeRequestCreateNestedOneWithoutVisionInput | undefined;
}
