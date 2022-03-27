import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesCreateNestedManyWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateNestedManyWithoutPremiseInput";
import { ThreadsOnPremiseCreateNestedManyWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateNestedManyWithoutPremiseInput";
import { UserCreateNestedOneWithoutPremisesInput } from "../inputs/UserCreateNestedOneWithoutPremisesInput";
import { VisionCreateNestedManyWithoutPremiseInput } from "../inputs/VisionCreateNestedManyWithoutPremiseInput";
import { PremiseStatus } from "../../enums/PremiseStatus";

@TypeGraphQL.InputType("PremiseCreateWithoutPremisesOnTimelinesInput", {
  isAbstract: true
})
export class PremiseCreateWithoutPremisesOnTimelinesInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPremisesInput, {
    nullable: true
  })
  author?: UserCreateNestedOneWithoutPremisesInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutPremiseInput, {
    nullable: true
  })
  vision?: VisionCreateNestedManyWithoutPremiseInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutPremiseInput, {
    nullable: true
  })
  tagsOnPremises?: TagsOnPremisesCreateNestedManyWithoutPremiseInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateNestedManyWithoutPremiseInput, {
    nullable: true
  })
  threadsOnPremise?: ThreadsOnPremiseCreateNestedManyWithoutPremiseInput | undefined;
}
