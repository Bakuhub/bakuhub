"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VisionScalarFieldEnum;
(function (VisionScalarFieldEnum) {
    VisionScalarFieldEnum["id"] = "id";
    VisionScalarFieldEnum["title"] = "title";
    VisionScalarFieldEnum["activityDate"] = "activityDate";
    VisionScalarFieldEnum["description"] = "description";
    VisionScalarFieldEnum["updatedAt"] = "updatedAt";
    VisionScalarFieldEnum["createdAt"] = "createdAt";
    VisionScalarFieldEnum["referenceId"] = "referenceId";
    VisionScalarFieldEnum["authorId"] = "authorId";
    VisionScalarFieldEnum["thumbnail"] = "thumbnail";
    VisionScalarFieldEnum["premiseId"] = "premiseId";
    VisionScalarFieldEnum["draftMode"] = "draftMode";
    VisionScalarFieldEnum["prevVisionId"] = "prevVisionId";
})(VisionScalarFieldEnum = exports.VisionScalarFieldEnum || (exports.VisionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(VisionScalarFieldEnum, {
    name: "VisionScalarFieldEnum",
    description: undefined,
});
