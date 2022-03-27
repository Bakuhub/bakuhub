import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {SessionCreateWithoutUserInput} from "./SessionCreateWithoutUserInput";
import {SessionUpdateWithoutUserInput} from "./SessionUpdateWithoutUserInput";
import {SessionWhereUniqueInput} from "./SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionUpsertWithWhereUniqueWithoutUserInput", {
    isAbstract: true
})
export class SessionUpsertWithWhereUniqueWithoutUserInput {
    @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
        nullable: false
    })
    where!: SessionWhereUniqueInput;

    @TypeGraphQL.Field(_type => SessionUpdateWithoutUserInput, {
        nullable: false
    })
    update!: SessionUpdateWithoutUserInput;

    @TypeGraphQL.Field(_type => SessionCreateWithoutUserInput, {
        nullable: false
    })
    create!: SessionCreateWithoutUserInput;
}
