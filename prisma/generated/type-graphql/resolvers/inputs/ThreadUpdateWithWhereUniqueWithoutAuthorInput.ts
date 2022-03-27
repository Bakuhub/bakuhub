import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadUpdateWithoutAuthorInput} from "./ThreadUpdateWithoutAuthorInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateWithWhereUniqueWithoutAuthorInput", {
    isAbstract: true
})
export class ThreadUpdateWithWhereUniqueWithoutAuthorInput {
    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadUpdateWithoutAuthorInput, {
        nullable: false
    })
    data!: ThreadUpdateWithoutAuthorInput;
}
