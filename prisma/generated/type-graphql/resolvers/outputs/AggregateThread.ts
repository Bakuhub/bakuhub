import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCountAggregate} from "./ThreadCountAggregate";
import {ThreadMaxAggregate} from "./ThreadMaxAggregate";
import {ThreadMinAggregate} from "./ThreadMinAggregate";

@TypeGraphQL.ObjectType("AggregateThread", {
    isAbstract: true
})
export class AggregateThread {
    @TypeGraphQL.Field(_type => ThreadCountAggregate, {
        nullable: true
    })
    _count!: ThreadCountAggregate | null;

    @TypeGraphQL.Field(_type => ThreadMinAggregate, {
        nullable: true
    })
    _min!: ThreadMinAggregate | null;

    @TypeGraphQL.Field(_type => ThreadMaxAggregate, {
        nullable: true
    })
    _max!: ThreadMaxAggregate | null;
}
