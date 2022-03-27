import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnPremisesAvgAggregate} from "./TagsOnPremisesAvgAggregate";
import {TagsOnPremisesCountAggregate} from "./TagsOnPremisesCountAggregate";
import {TagsOnPremisesMaxAggregate} from "./TagsOnPremisesMaxAggregate";
import {TagsOnPremisesMinAggregate} from "./TagsOnPremisesMinAggregate";
import {TagsOnPremisesSumAggregate} from "./TagsOnPremisesSumAggregate";

@TypeGraphQL.ObjectType("AggregateTagsOnPremises", {
    isAbstract: true
})
export class AggregateTagsOnPremises {
    @TypeGraphQL.Field(_type => TagsOnPremisesCountAggregate, {
        nullable: true
    })
    _count!: TagsOnPremisesCountAggregate | null;

    @TypeGraphQL.Field(_type => TagsOnPremisesAvgAggregate, {
        nullable: true
    })
    _avg!: TagsOnPremisesAvgAggregate | null;

    @TypeGraphQL.Field(_type => TagsOnPremisesSumAggregate, {
        nullable: true
    })
    _sum!: TagsOnPremisesSumAggregate | null;

    @TypeGraphQL.Field(_type => TagsOnPremisesMinAggregate, {
        nullable: true
    })
    _min!: TagsOnPremisesMinAggregate | null;

    @TypeGraphQL.Field(_type => TagsOnPremisesMaxAggregate, {
        nullable: true
    })
    _max!: TagsOnPremisesMaxAggregate | null;
}
