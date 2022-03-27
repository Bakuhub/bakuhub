import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {SessionUpdateWithoutUserInput} from "./SessionUpdateWithoutUserInput";
import {SessionWhereUniqueInput} from "./SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionUpdateWithWhereUniqueWithoutUserInput", {
    isAbstract: true
})
export class SessionUpdateWithWhereUniqueWithoutUserInput {
    @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
        nullable: false
    })
    where!: SessionWhereUniqueInput;

    @TypeGraphQL.Field(_type => SessionUpdateWithoutUserInput, {
        nullable: false
    })
    data!: SessionUpdateWithoutUserInput;
}
