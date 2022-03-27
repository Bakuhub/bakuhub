import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput} from "./PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput";
import {ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput} from "./ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput";

@TypeGraphQL.InputType("ThreadsOnPremiseUpdateInput", {
    isAbstract: true
})
export class ThreadsOnPremiseUpdateInput {
    @TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    thread?: ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    premise?: PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
