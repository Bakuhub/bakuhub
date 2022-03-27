import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceCountAggregate } from "../outputs/ReferenceCountAggregate";
import { ReferenceMaxAggregate } from "../outputs/ReferenceMaxAggregate";
import { ReferenceMinAggregate } from "../outputs/ReferenceMinAggregate";

@TypeGraphQL.ObjectType("AggregateReference", {
  isAbstract: true
})
export class AggregateReference {
  @TypeGraphQL.Field(_type => ReferenceCountAggregate, {
    nullable: true
  })
  _count!: ReferenceCountAggregate | null;

  @TypeGraphQL.Field(_type => ReferenceMinAggregate, {
    nullable: true
  })
  _min!: ReferenceMinAggregate | null;

  @TypeGraphQL.Field(_type => ReferenceMaxAggregate, {
    nullable: true
  })
  _max!: ReferenceMaxAggregate | null;
}
