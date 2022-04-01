import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateNestedOneWithoutVisionInput } from "../inputs/MergeRequestCreateNestedOneWithoutVisionInput";
import { PremiseCreateNestedOneWithoutVisionInput } from "../inputs/PremiseCreateNestedOneWithoutVisionInput";
import { ReactionOnVisionCreateNestedManyWithoutVisionInput } from "../inputs/ReactionOnVisionCreateNestedManyWithoutVisionInput";
import { ThreadsOnVisionCreateNestedManyWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateNestedManyWithoutVisionInput";
import { UserCreateNestedOneWithoutVisionsInput } from "../inputs/UserCreateNestedOneWithoutVisionsInput";
import { VisionCreateNestedManyWithoutPrevVisionInput } from "../inputs/VisionCreateNestedManyWithoutPrevVisionInput";
import { VisionCreateNestedOneWithoutNextVisionsInput } from "../inputs/VisionCreateNestedOneWithoutNextVisionsInput";

@TypeGraphQL.InputType("VisionCreateWithoutReferenceInput", {
  isAbstract: true
})
export class VisionCreateWithoutReferenceInput {
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
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVisionsInput, {
    nullable: true
  })
  author?: UserCreateNestedOneWithoutVisionsInput | undefined;

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

  @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutNextVisionsInput, {
    nullable: true
  })
  prevVision?: VisionCreateNestedOneWithoutNextVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPrevVisionInput, {
    nullable: true
  })
  nextVisions?: VisionCreateNestedManyWithoutPrevVisionInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateNestedManyWithoutVisionInput, {
    nullable: true
  })
  threadsOnVision?: ThreadsOnVisionCreateNestedManyWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestCreateNestedOneWithoutVisionInput, {
    nullable: true
  })
  mergeRequest?: MergeRequestCreateNestedOneWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionCreateNestedManyWithoutVisionInput, {
    nullable: true
  })
  ReactionOnVision?: ReactionOnVisionCreateNestedManyWithoutVisionInput | undefined;
}
