"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PremisesOnTimelinesScalarFieldEnum;
(function (PremisesOnTimelinesScalarFieldEnum) {
    PremisesOnTimelinesScalarFieldEnum["timelineId"] = "timelineId";
    PremisesOnTimelinesScalarFieldEnum["premiseId"] = "premiseId";
    PremisesOnTimelinesScalarFieldEnum["assignedAt"] = "assignedAt";
})(PremisesOnTimelinesScalarFieldEnum = exports.PremisesOnTimelinesScalarFieldEnum || (exports.PremisesOnTimelinesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PremisesOnTimelinesScalarFieldEnum, {
    name: "PremisesOnTimelinesScalarFieldEnum",
    description: undefined,
});
