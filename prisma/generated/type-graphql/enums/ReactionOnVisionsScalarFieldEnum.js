"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReactionOnVisionsScalarFieldEnum;
(function (ReactionOnVisionsScalarFieldEnum) {
    ReactionOnVisionsScalarFieldEnum["userId"] = "userId";
    ReactionOnVisionsScalarFieldEnum["visionId"] = "visionId";
    ReactionOnVisionsScalarFieldEnum["reaction"] = "reaction";
    ReactionOnVisionsScalarFieldEnum["createdAt"] = "createdAt";
})(ReactionOnVisionsScalarFieldEnum = exports.ReactionOnVisionsScalarFieldEnum || (exports.ReactionOnVisionsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReactionOnVisionsScalarFieldEnum, {
    name: "ReactionOnVisionsScalarFieldEnum",
    description: undefined,
});
