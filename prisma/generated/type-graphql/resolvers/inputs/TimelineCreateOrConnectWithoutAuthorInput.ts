import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineCreateWithoutAuthorInput} from "./TimelineCreateWithoutAuthorInput";
import {TimelineWhereUniqueInput} from "./TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateOrConnectWithoutAuthorInput", {
    isAbstract: true
})
export class TimelineCreateOrConnectWithoutAuthorInput {
    @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
        nullable: false
    })
    where!: TimelineWhereUniqueInput;

    @TypeGraphQL.Field(_type => TimelineCreateWithoutAuthorInput, {
        nullable: false
    })
    create!: TimelineCreateWithoutAuthorInput;
}
