"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["AUTO"] = "AUTO";
    SubscriptionType["MANUAL"] = "MANUAL";
})(SubscriptionType = exports.SubscriptionType || (exports.SubscriptionType = {}));
TypeGraphQL.registerEnumType(SubscriptionType, {
    name: "SubscriptionType",
    description: undefined,
});
