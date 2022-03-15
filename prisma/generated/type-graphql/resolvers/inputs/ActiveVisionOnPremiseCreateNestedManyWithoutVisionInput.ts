import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateManyVisionInputEnvelope } from "../inputs/ActiveVisionOnPremiseCreateManyVisionInputEnvelope";
import { ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput";
import { ActiveVisionOnPremiseCreateWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseCreateWithoutVisionInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateNestedManyWithoutVisionInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateNestedManyWithoutVisionInput {
  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateWithoutVisionInput], {
    nullable: true
  })
  create?: ActiveVisionOnPremiseCreateWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput], {
    nullable: true
  })
  connectOrCreate?: ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateManyVisionInputEnvelope, {
    nullable: true
  })
  createMany?: ActiveVisionOnPremiseCreateManyVisionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseWhereUniqueInput], {
    nullable: true
  })
  connect?: ActiveVisionOnPremiseWhereUniqueInput[] | undefined;
}
