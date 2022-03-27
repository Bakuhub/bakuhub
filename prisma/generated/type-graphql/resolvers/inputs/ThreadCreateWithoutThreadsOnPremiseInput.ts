import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateNestedManyWithoutParentThreadInput} from "./ThreadCreateNestedManyWithoutParentThreadInput";
import {ThreadCreateNestedOneWithoutChildThreadsInput} from "./ThreadCreateNestedOneWithoutChildThreadsInput";
import {ThreadsOnTimelineCreateNestedOneWithoutThreadInput} from "./ThreadsOnTimelineCreateNestedOneWithoutThreadInput";
import {ThreadsOnVisionCreateNestedOneWithoutThreadInput} from "./ThreadsOnVisionCreateNestedOneWithoutThreadInput";
import {UserCreateNestedOneWithoutThreadInput} from "./UserCreateNestedOneWithoutThreadInput";

@TypeGraphQL.InputType("ThreadCreateWithoutThreadsOnPremiseInput", {
    isAbstract: true
})
export class ThreadCreateWithoutThreadsOnPremiseInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    id?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    title!: string;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    activityDate?: Date | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    description?: string | undefined;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    createdAt?: Date | undefined;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    reference?: string | undefined;

    @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutThreadInput, {
        nullable: true
    })
    author?: UserCreateNestedOneWithoutThreadInput | undefined;

    @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutChildThreadsInput, {
        nullable: true
    })
    parentThread?: ThreadCreateNestedOneWithoutChildThreadsInput | undefined;

    @TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutParentThreadInput, {
        nullable: true
    })
    childThreads?: ThreadCreateNestedManyWithoutParentThreadInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateNestedOneWithoutThreadInput, {
        nullable: true
    })
    threadsOnTimeline?: ThreadsOnTimelineCreateNestedOneWithoutThreadInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionCreateNestedOneWithoutThreadInput, {
        nullable: true
    })
    threadsOnVision?: ThreadsOnVisionCreateNestedOneWithoutThreadInput | undefined;
}
