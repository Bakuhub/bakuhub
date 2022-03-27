import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput} from "./ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput";

@TypeGraphQL.InputType("ThreadsOnVisionWhereUniqueInput", {
    isAbstract: true
})
export class ThreadsOnVisionWhereUniqueInput {
    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    threadId?: string | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput, {
        nullable: true
    })
    threadId_visionId?: ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput | undefined;
}
