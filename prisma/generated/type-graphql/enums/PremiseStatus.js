"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PremiseStatus;
(function (PremiseStatus) {
    PremiseStatus["RUMOUR"] = "RUMOUR";
    PremiseStatus["UNVERIFIED"] = "UNVERIFIED";
    PremiseStatus["REFERENCE_PROVIDED"] = "REFERENCE_PROVIDED";
    PremiseStatus["VERIFIED"] = "VERIFIED";
    PremiseStatus["MISINFORMATION"] = "MISINFORMATION";
})(PremiseStatus = exports.PremiseStatus || (exports.PremiseStatus = {}));
TypeGraphQL.registerEnumType(PremiseStatus, {
    name: "PremiseStatus",
    description: undefined,
});
