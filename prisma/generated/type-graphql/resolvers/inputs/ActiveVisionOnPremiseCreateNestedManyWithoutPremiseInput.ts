import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateManyPremiseInputEnvelope } from "../inputs/ActiveVisionOnPremiseCreateManyPremiseInputEnvelope";
import { ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput";
import { ActiveVisionOnPremiseCreateWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseCreateWithoutPremiseInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateNestedManyWithoutPremiseInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateNestedManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: ActiveVisionOnPremiseCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: ActiveVisionOnPremiseCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseWhereUniqueInput], {
    nullable: true
  })
  connect?: ActiveVisionOnPremiseWhereUniqueInput[] | undefined;
}
