import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnPremiseUpdateWithoutPremiseInput} from "./ThreadsOnPremiseUpdateWithoutPremiseInput";
import {ThreadsOnPremiseWhereUniqueInput} from "./ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput", {
    isAbstract: true
})
export class ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput {
    @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadsOnPremiseWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateWithoutPremiseInput, {
        nullable: false
    })
    data!: ThreadsOnPremiseUpdateWithoutPremiseInput;
}
