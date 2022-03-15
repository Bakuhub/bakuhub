import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActiveVisionOnPremiseCreateManyInput } from "../../../inputs/ActiveVisionOnPremiseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActiveVisionOnPremiseArgs {
  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseCreateManyInput], {
    nullable: false
  })
  data!: ActiveVisionOnPremiseCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
