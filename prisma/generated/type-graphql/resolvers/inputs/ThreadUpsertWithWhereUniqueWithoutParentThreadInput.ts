import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateWithoutParentThreadInput} from "./ThreadCreateWithoutParentThreadInput";
import {ThreadUpdateWithoutParentThreadInput} from "./ThreadUpdateWithoutParentThreadInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpsertWithWhereUniqueWithoutParentThreadInput", {
    isAbstract: true
})
export class ThreadUpsertWithWhereUniqueWithoutParentThreadInput {
    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadUpdateWithoutParentThreadInput, {
        nullable: false
    })
    update!: ThreadUpdateWithoutParentThreadInput;

    @TypeGraphQL.Field(_type => ThreadCreateWithoutParentThreadInput, {
        nullable: false
    })
    create!: ThreadCreateWithoutParentThreadInput;
}
