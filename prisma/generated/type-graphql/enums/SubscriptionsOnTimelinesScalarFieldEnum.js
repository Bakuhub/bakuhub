"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SubscriptionsOnTimelinesScalarFieldEnum;
(function (SubscriptionsOnTimelinesScalarFieldEnum) {
    SubscriptionsOnTimelinesScalarFieldEnum["userId"] = "userId";
    SubscriptionsOnTimelinesScalarFieldEnum["timelineId"] = "timelineId";
    SubscriptionsOnTimelinesScalarFieldEnum["lastReadAt"] = "lastReadAt";
    SubscriptionsOnTimelinesScalarFieldEnum["type"] = "type";
    SubscriptionsOnTimelinesScalarFieldEnum["createdAt"] = "createdAt";
    SubscriptionsOnTimelinesScalarFieldEnum["updatedAt"] = "updatedAt";
})(SubscriptionsOnTimelinesScalarFieldEnum = exports.SubscriptionsOnTimelinesScalarFieldEnum || (exports.SubscriptionsOnTimelinesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SubscriptionsOnTimelinesScalarFieldEnum, {
    name: "SubscriptionsOnTimelinesScalarFieldEnum",
    description: undefined,
});
