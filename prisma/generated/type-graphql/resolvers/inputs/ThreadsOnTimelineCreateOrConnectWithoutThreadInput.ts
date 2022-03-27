import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnTimelineCreateWithoutThreadInput} from "./ThreadsOnTimelineCreateWithoutThreadInput";
import {ThreadsOnTimelineWhereUniqueInput} from "./ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnTimelineCreateOrConnectWithoutThreadInput", {
    isAbstract: true
})
export class ThreadsOnTimelineCreateOrConnectWithoutThreadInput {
    @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadsOnTimelineWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutThreadInput, {
        nullable: false
    })
    create!: ThreadsOnTimelineCreateWithoutThreadInput;
}
