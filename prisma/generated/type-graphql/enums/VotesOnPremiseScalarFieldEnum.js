"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VotesOnPremiseScalarFieldEnum;
(function (VotesOnPremiseScalarFieldEnum) {
    VotesOnPremiseScalarFieldEnum["userId"] = "userId";
    VotesOnPremiseScalarFieldEnum["premiseId"] = "premiseId";
    VotesOnPremiseScalarFieldEnum["vote"] = "vote";
    VotesOnPremiseScalarFieldEnum["createdAt"] = "createdAt";
    VotesOnPremiseScalarFieldEnum["updatedAt"] = "updatedAt";
})(VotesOnPremiseScalarFieldEnum = exports.VotesOnPremiseScalarFieldEnum || (exports.VotesOnPremiseScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(VotesOnPremiseScalarFieldEnum, {
    name: "VotesOnPremiseScalarFieldEnum",
    description: undefined,
});
