"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VisionViewsHistoryScalarFieldEnum;
(function (VisionViewsHistoryScalarFieldEnum) {
    VisionViewsHistoryScalarFieldEnum["id"] = "id";
    VisionViewsHistoryScalarFieldEnum["visionId"] = "visionId";
    VisionViewsHistoryScalarFieldEnum["userId"] = "userId";
    VisionViewsHistoryScalarFieldEnum["createdAt"] = "createdAt";
})(VisionViewsHistoryScalarFieldEnum = exports.VisionViewsHistoryScalarFieldEnum || (exports.VisionViewsHistoryScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(VisionViewsHistoryScalarFieldEnum, {
    name: "VisionViewsHistoryScalarFieldEnum",
    description: undefined,
});
