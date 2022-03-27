import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateNestedOneWithoutVisionInput } from "../inputs/MergeRequestCreateNestedOneWithoutVisionInput";
import { PremiseCreateNestedOneWithoutVisionInput } from "../inputs/PremiseCreateNestedOneWithoutVisionInput";
import { ReferenceCreateNestedOneWithoutVisionInput } from "../inputs/ReferenceCreateNestedOneWithoutVisionInput";
import { ThreadsOnVisionCreateNestedManyWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateNestedManyWithoutVisionInput";
import { VisionCreateNestedManyWithoutPrevVisionInput } from "../inputs/VisionCreateNestedManyWithoutPrevVisionInput";
import { VisionCreateNestedOneWithoutNextVisionsInput } from "../inputs/VisionCreateNestedOneWithoutNextVisionsInput";

@TypeGraphQL.InputType("VisionCreateWithoutAuthorInput", {
  isAbstract: true
})
export class VisionCreateWithoutAuthorInput {
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

  @TypeGraphQL.Field(_type => ReferenceCreateNestedOneWithoutVisionInput, {
    nullable: true
  })
  reference?: ReferenceCreateNestedOneWithoutVisionInput | undefined;

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
}
