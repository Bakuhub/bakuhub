import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadCreateManyUserInputEnvelope } from "../inputs/VotesOnThreadCreateManyUserInputEnvelope";
import { VotesOnThreadCreateOrConnectWithoutUserInput } from "../inputs/VotesOnThreadCreateOrConnectWithoutUserInput";
import { VotesOnThreadCreateWithoutUserInput } from "../inputs/VotesOnThreadCreateWithoutUserInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnThreadCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class VotesOnThreadCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [VotesOnThreadCreateWithoutUserInput], {
    nullable: true
  })
  create?: VotesOnThreadCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnThreadCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnThreadCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnThreadWhereUniqueInput[] | undefined;
}
