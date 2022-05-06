"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PremiseScalarFieldEnum;
(function (PremiseScalarFieldEnum) {
    PremiseScalarFieldEnum["id"] = "id";
    PremiseScalarFieldEnum["title"] = "title";
    PremiseScalarFieldEnum["createdAt"] = "createdAt";
    PremiseScalarFieldEnum["updatedAt"] = "updatedAt";
    PremiseScalarFieldEnum["status"] = "status";
    PremiseScalarFieldEnum["authorId"] = "authorId";
})(PremiseScalarFieldEnum = exports.PremiseScalarFieldEnum || (exports.PremiseScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PremiseScalarFieldEnum, {
    name: "PremiseScalarFieldEnum",
    description: undefined,
});
