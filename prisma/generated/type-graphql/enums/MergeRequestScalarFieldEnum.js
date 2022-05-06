"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MergeRequestScalarFieldEnum;
(function (MergeRequestScalarFieldEnum) {
    MergeRequestScalarFieldEnum["id"] = "id";
    MergeRequestScalarFieldEnum["title"] = "title";
    MergeRequestScalarFieldEnum["description"] = "description";
    MergeRequestScalarFieldEnum["status"] = "status";
    MergeRequestScalarFieldEnum["visionId"] = "visionId";
})(MergeRequestScalarFieldEnum = exports.MergeRequestScalarFieldEnum || (exports.MergeRequestScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MergeRequestScalarFieldEnum, {
    name: "MergeRequestScalarFieldEnum",
    description: undefined,
});
