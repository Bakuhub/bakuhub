import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadCreateManyThreadInputEnvelope } from "../inputs/VotesOnThreadCreateManyThreadInputEnvelope";
import { VotesOnThreadCreateOrConnectWithoutThreadInput } from "../inputs/VotesOnThreadCreateOrConnectWithoutThreadInput";
import { VotesOnThreadCreateWithoutThreadInput } from "../inputs/VotesOnThreadCreateWithoutThreadInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnThreadCreateNestedManyWithoutThreadInput", {
  isAbstract: true
})
export class VotesOnThreadCreateNestedManyWithoutThreadInput {
  @TypeGraphQL.Field(_type => [VotesOnThreadCreateWithoutThreadInput], {
    nullable: true
  })
  create?: VotesOnThreadCreateWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadCreateOrConnectWithoutThreadInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnThreadCreateOrConnectWithoutThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadCreateManyThreadInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnThreadCreateManyThreadInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnThreadWhereUniqueInput[] | undefined;
}
