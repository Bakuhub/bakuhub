import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceCreateOrConnectWithoutVisionInput } from "../inputs/ReferenceCreateOrConnectWithoutVisionInput";
import { ReferenceCreateWithoutVisionInput } from "../inputs/ReferenceCreateWithoutVisionInput";
import { ReferenceUpdateWithoutVisionInput } from "../inputs/ReferenceUpdateWithoutVisionInput";
import { ReferenceUpsertWithoutVisionInput } from "../inputs/ReferenceUpsertWithoutVisionInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.InputType("ReferenceUpdateOneWithoutVisionInput", {
  isAbstract: true
})
export class ReferenceUpdateOneWithoutVisionInput {
  @TypeGraphQL.Field(_type => ReferenceCreateWithoutVisionInput, {
    nullable: true
  })
  create?: ReferenceCreateWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceCreateOrConnectWithoutVisionInput, {
    nullable: true
  })
  connectOrCreate?: ReferenceCreateOrConnectWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceUpsertWithoutVisionInput, {
    nullable: true
  })
  upsert?: ReferenceUpsertWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ReferenceWhereUniqueInput, {
    nullable: true
  })
  connect?: ReferenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceUpdateWithoutVisionInput, {
    nullable: true
  })
  update?: ReferenceUpdateWithoutVisionInput | undefined;
}
