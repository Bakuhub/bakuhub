import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { ThreadCreateNestedManyWithoutAuthorInput } from "../inputs/ThreadCreateNestedManyWithoutAuthorInput";
import { TimelineCreateNestedManyWithoutAuthorInput } from "../inputs/TimelineCreateNestedManyWithoutAuthorInput";
import { VisionCreateNestedManyWithoutAuthorInput } from "../inputs/VisionCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("UserCreateWithoutPremisesInput", {
  isAbstract: true
})
export class UserCreateWithoutPremisesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  emailVerified?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  accounts?: AccountCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  sessions?: SessionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  threads?: ThreadCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  visions?: VisionCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  timelines?: TimelineCreateNestedManyWithoutAuthorInput | undefined;
}