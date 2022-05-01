"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SubscriptionsOnPremisesScalarFieldEnum;
(function (SubscriptionsOnPremisesScalarFieldEnum) {
    SubscriptionsOnPremisesScalarFieldEnum["userId"] = "userId";
    SubscriptionsOnPremisesScalarFieldEnum["premiseId"] = "premiseId";
    SubscriptionsOnPremisesScalarFieldEnum["type"] = "type";
    SubscriptionsOnPremisesScalarFieldEnum["createdAt"] = "createdAt";
    SubscriptionsOnPremisesScalarFieldEnum["updatedAt"] = "updatedAt";
})(SubscriptionsOnPremisesScalarFieldEnum = exports.SubscriptionsOnPremisesScalarFieldEnum || (exports.SubscriptionsOnPremisesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SubscriptionsOnPremisesScalarFieldEnum, {
    name: "SubscriptionsOnPremisesScalarFieldEnum",
    description: undefined,
});
