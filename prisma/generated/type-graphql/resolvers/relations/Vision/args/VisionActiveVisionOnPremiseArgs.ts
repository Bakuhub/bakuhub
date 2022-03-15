import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActiveVisionOnPremiseOrderByWithRelationInput } from "../../../inputs/ActiveVisionOnPremiseOrderByWithRelationInput";
import { ActiveVisionOnPremiseWhereInput } from "../../../inputs/ActiveVisionOnPremiseWhereInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../../../inputs/ActiveVisionOnPremiseWhereUniqueInput";
import { ActiveVisionOnPremiseScalarFieldEnum } from "../../../../enums/ActiveVisionOnPremiseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class VisionActiveVisionOnPremiseArgs {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereInput, {
    nullable: true
  })
  where?: ActiveVisionOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ActiveVisionOnPremiseOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereUniqueInput, {
    nullable: true
  })
  cursor?: ActiveVisionOnPremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"premiseId" | "visionId"> | undefined;
}
