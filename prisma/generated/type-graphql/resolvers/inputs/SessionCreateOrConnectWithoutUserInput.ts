import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {SessionCreateWithoutUserInput} from "./SessionCreateWithoutUserInput";
import {SessionWhereUniqueInput} from "./SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionCreateOrConnectWithoutUserInput", {
    isAbstract: true
})
export class SessionCreateOrConnectWithoutUserInput {
    @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
        nullable: false
    })
    where!: SessionWhereUniqueInput;

    @TypeGraphQL.Field(_type => SessionCreateWithoutUserInput, {
        nullable: false
    })
    create!: SessionCreateWithoutUserInput;
}
