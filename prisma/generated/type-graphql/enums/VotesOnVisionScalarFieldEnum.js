"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VotesOnVisionScalarFieldEnum;
(function (VotesOnVisionScalarFieldEnum) {
    VotesOnVisionScalarFieldEnum["userId"] = "userId";
    VotesOnVisionScalarFieldEnum["visionId"] = "visionId";
    VotesOnVisionScalarFieldEnum["vote"] = "vote";
    VotesOnVisionScalarFieldEnum["createdAt"] = "createdAt";
})(VotesOnVisionScalarFieldEnum = exports.VotesOnVisionScalarFieldEnum || (exports.VotesOnVisionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(VotesOnVisionScalarFieldEnum, {
    name: "VotesOnVisionScalarFieldEnum",
    description: undefined,
});
