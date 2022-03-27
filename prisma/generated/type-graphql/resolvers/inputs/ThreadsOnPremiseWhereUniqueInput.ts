import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput} from "./ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput";

@TypeGraphQL.InputType("ThreadsOnPremiseWhereUniqueInput", {
    isAbstract: true
})
export class ThreadsOnPremiseWhereUniqueInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    threadId?: string | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput, {
        nullable: true
    })
    threadId_premiseId?: ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput | undefined;
}
