"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionWhereInput_1 = require("../inputs/VisionWhereInput");
let VisionRelationFilter = class VisionRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereInput_1.VisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereInput_1.VisionWhereInput)
], VisionRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereInput_1.VisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereInput_1.VisionWhereInput)
], VisionRelationFilter.prototype, "isNot", void 0);
VisionRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionRelationFilter", {
        isAbstract: true
    })
], VisionRelationFilter);
exports.VisionRelationFilter = VisionRelationFilter;
