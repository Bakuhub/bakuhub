import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateManyPremiseInput} from "./VisionCreateManyPremiseInput";

@TypeGraphQL.InputType("VisionCreateManyPremiseInputEnvelope", {
    isAbstract: true
})
export class VisionCreateManyPremiseInputEnvelope {
    @TypeGraphQL.Field(_type => [VisionCreateManyPremiseInput], {
        nullable: false
    })
    data!: VisionCreateManyPremiseInput[];

    @TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
    skipDuplicates?: boolean | undefined;
}
