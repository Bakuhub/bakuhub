import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnPremiseCreateWithoutThreadInput} from "./ThreadsOnPremiseCreateWithoutThreadInput";
import {ThreadsOnPremiseUpdateWithoutThreadInput} from "./ThreadsOnPremiseUpdateWithoutThreadInput";

@TypeGraphQL.InputType("ThreadsOnPremiseUpsertWithoutThreadInput", {
    isAbstract: true
})
export class ThreadsOnPremiseUpsertWithoutThreadInput {
    @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateWithoutThreadInput, {
        nullable: false
    })
    update!: ThreadsOnPremiseUpdateWithoutThreadInput;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutThreadInput, {
        nullable: false
    })
    create!: ThreadsOnPremiseCreateWithoutThreadInput;
}
