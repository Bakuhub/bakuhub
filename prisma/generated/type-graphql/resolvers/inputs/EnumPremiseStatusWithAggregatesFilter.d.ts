import { NestedEnumPremiseStatusFilter } from "../inputs/NestedEnumPremiseStatusFilter";
import { NestedEnumPremiseStatusWithAggregatesFilter } from "../inputs/NestedEnumPremiseStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumPremiseStatusWithAggregatesFilter {
    equals?: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION" | undefined;
    in?: Array<"RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION"> | undefined;
    notIn?: Array<"RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION"> | undefined;
    not?: NestedEnumPremiseStatusWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPremiseStatusFilter | undefined;
    _max?: NestedEnumPremiseStatusFilter | undefined;
}
