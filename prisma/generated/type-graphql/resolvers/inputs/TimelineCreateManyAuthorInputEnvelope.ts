import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineCreateManyAuthorInput} from "./TimelineCreateManyAuthorInput";

@TypeGraphQL.InputType("TimelineCreateManyAuthorInputEnvelope", {
    isAbstract: true
})
export class TimelineCreateManyAuthorInputEnvelope {
    @TypeGraphQL.Field(_type => [TimelineCreateManyAuthorInput], {
        nullable: false
    })
    data!: TimelineCreateManyAuthorInput[];

    @TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
    skipDuplicates?: boolean | undefined;
}
