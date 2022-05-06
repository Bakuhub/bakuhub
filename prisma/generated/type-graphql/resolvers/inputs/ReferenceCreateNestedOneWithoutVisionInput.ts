import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceCreateOrConnectWithoutVisionInput } from "../inputs/ReferenceCreateOrConnectWithoutVisionInput";
import { ReferenceCreateWithoutVisionInput } from "../inputs/ReferenceCreateWithoutVisionInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.InputType("ReferenceCreateNestedOneWithoutVisionInput", {
  isAbstract: true
})
export class ReferenceCreateNestedOneWithoutVisionInput {
  @TypeGraphQL.Field(_type => ReferenceCreateWithoutVisionInput, {
    nullable: true
  })
  create?: ReferenceCreateWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceCreateOrConnectWithoutVisionInput, {
    nullable: true
  })
  connectOrCreate?: ReferenceCreateOrConnectWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceWhereUniqueInput, {
    nullable: true
  })
  connect?: ReferenceWhereUniqueInput | undefined;
}
