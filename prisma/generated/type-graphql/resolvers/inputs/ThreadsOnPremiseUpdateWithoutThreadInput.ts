import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput} from "./PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput";

@TypeGraphQL.InputType("ThreadsOnPremiseUpdateWithoutThreadInput", {
    isAbstract: true
})
export class ThreadsOnPremiseUpdateWithoutThreadInput {
    @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    premise?: PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
