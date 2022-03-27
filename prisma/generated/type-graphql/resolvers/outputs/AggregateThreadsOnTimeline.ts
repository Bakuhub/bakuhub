import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnTimelineCountAggregate} from "./ThreadsOnTimelineCountAggregate";
import {ThreadsOnTimelineMaxAggregate} from "./ThreadsOnTimelineMaxAggregate";
import {ThreadsOnTimelineMinAggregate} from "./ThreadsOnTimelineMinAggregate";

@TypeGraphQL.ObjectType("AggregateThreadsOnTimeline", {
    isAbstract: true
})
export class AggregateThreadsOnTimeline {
    @TypeGraphQL.Field(_type => ThreadsOnTimelineCountAggregate, {
        nullable: true
    })
    _count!: ThreadsOnTimelineCountAggregate | null;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineMinAggregate, {
        nullable: true
    })
    _min!: ThreadsOnTimelineMinAggregate | null;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineMaxAggregate, {
        nullable: true
    })
    _max!: ThreadsOnTimelineMaxAggregate | null;
}
