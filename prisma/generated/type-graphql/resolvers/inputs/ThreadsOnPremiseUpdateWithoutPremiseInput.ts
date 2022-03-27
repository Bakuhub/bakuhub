import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput} from "./ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput";

@TypeGraphQL.InputType("ThreadsOnPremiseUpdateWithoutPremiseInput", {
    isAbstract: true
})
export class ThreadsOnPremiseUpdateWithoutPremiseInput {
    @TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    thread?: ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
