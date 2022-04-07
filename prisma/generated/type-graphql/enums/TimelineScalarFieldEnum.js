"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TimelineScalarFieldEnum;
(function (TimelineScalarFieldEnum) {
    TimelineScalarFieldEnum["id"] = "id";
    TimelineScalarFieldEnum["title"] = "title";
    TimelineScalarFieldEnum["description"] = "description";
    TimelineScalarFieldEnum["status"] = "status";
    TimelineScalarFieldEnum["authorId"] = "authorId";
})(TimelineScalarFieldEnum = exports.TimelineScalarFieldEnum || (exports.TimelineScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TimelineScalarFieldEnum, {
    name: "TimelineScalarFieldEnum",
    description: undefined,
});
