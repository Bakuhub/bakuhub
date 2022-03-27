import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnVisionCreateManyVisionInput} from "./ThreadsOnVisionCreateManyVisionInput";

@TypeGraphQL.InputType("ThreadsOnVisionCreateManyVisionInputEnvelope", {
    isAbstract: true
})
export class ThreadsOnVisionCreateManyVisionInputEnvelope {
    @TypeGraphQL.Field(_type => [ThreadsOnVisionCreateManyVisionInput], {
        nullable: false
    })
    data!: ThreadsOnVisionCreateManyVisionInput[];

    @TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
    skipDuplicates?: boolean | undefined;
}
