import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCreateManyUserInputEnvelope } from "../inputs/SubscriptionsOnTimelinesCreateManyUserInputEnvelope";
import { SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput";
import { SubscriptionsOnTimelinesCreateWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutUserInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateWithoutUserInput], {
    nullable: true
  })
  create?: SubscriptionsOnTimelinesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionsOnTimelinesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
}
