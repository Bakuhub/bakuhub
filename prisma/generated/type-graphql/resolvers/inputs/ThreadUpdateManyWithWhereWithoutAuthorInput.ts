import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadScalarWhereInput} from "./ThreadScalarWhereInput";
import {ThreadUpdateManyMutationInput} from "./ThreadUpdateManyMutationInput";

@TypeGraphQL.InputType("ThreadUpdateManyWithWhereWithoutAuthorInput", {
    isAbstract: true
})
export class ThreadUpdateManyWithWhereWithoutAuthorInput {
    @TypeGraphQL.Field(_type => ThreadScalarWhereInput, {
        nullable: false
    })
    where!: ThreadScalarWhereInput;

    @TypeGraphQL.Field(_type => ThreadUpdateManyMutationInput, {
        nullable: false
    })
    data!: ThreadUpdateManyMutationInput;
}
