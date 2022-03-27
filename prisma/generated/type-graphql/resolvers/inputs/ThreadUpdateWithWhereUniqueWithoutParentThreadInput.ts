import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadUpdateWithoutParentThreadInput} from "./ThreadUpdateWithoutParentThreadInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateWithWhereUniqueWithoutParentThreadInput", {
    isAbstract: true
})
export class ThreadUpdateWithWhereUniqueWithoutParentThreadInput {
    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadUpdateWithoutParentThreadInput, {
        nullable: false
    })
    data!: ThreadUpdateWithoutParentThreadInput;
}
