import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionCreateManyVisionInputEnvelope } from "../inputs/VotesOnVisionCreateManyVisionInputEnvelope";
import { VotesOnVisionCreateOrConnectWithoutVisionInput } from "../inputs/VotesOnVisionCreateOrConnectWithoutVisionInput";
import { VotesOnVisionCreateWithoutVisionInput } from "../inputs/VotesOnVisionCreateWithoutVisionInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionCreateNestedManyWithoutVisionInput", {
  isAbstract: true
})
export class VotesOnVisionCreateNestedManyWithoutVisionInput {
  @TypeGraphQL.Field(_type => [VotesOnVisionCreateWithoutVisionInput], {
    nullable: true
  })
  create?: VotesOnVisionCreateWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionCreateOrConnectWithoutVisionInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnVisionCreateOrConnectWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionCreateManyVisionInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnVisionCreateManyVisionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnVisionWhereUniqueInput[] | undefined;
}
