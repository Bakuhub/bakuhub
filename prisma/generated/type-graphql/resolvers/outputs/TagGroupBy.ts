import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagAvgAggregate} from "./TagAvgAggregate";
import {TagCountAggregate} from "./TagCountAggregate";
import {TagMaxAggregate} from "./TagMaxAggregate";
import {TagMinAggregate} from "./TagMinAggregate";
import {TagSumAggregate} from "./TagSumAggregate";

@TypeGraphQL.ObjectType("TagGroupBy", {
    isAbstract: true
})
export class TagGroupBy {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    })
    id!: number;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    label!: string;

    @TypeGraphQL.Field(_type => TagCountAggregate, {
        nullable: true
    })
    _count!: TagCountAggregate | null;

    @TypeGraphQL.Field(_type => TagAvgAggregate, {
        nullable: true
    })
    _avg!: TagAvgAggregate | null;

    @TypeGraphQL.Field(_type => TagSumAggregate, {
        nullable: true
    })
    _sum!: TagSumAggregate | null;

    @TypeGraphQL.Field(_type => TagMinAggregate, {
        nullable: true
    })
    _min!: TagMinAggregate | null;

    @TypeGraphQL.Field(_type => TagMaxAggregate, {
        nullable: true
    })
    _max!: TagMaxAggregate | null;
}
