"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionWhereInput_1 = require("../inputs/VisionWhereInput");
let VisionListRelationFilter = class VisionListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereInput_1.VisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereInput_1.VisionWhereInput)
], VisionListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereInput_1.VisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereInput_1.VisionWhereInput)
], VisionListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereInput_1.VisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereInput_1.VisionWhereInput)
], VisionListRelationFilter.prototype, "none", void 0);
VisionListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionListRelationFilter", {
        isAbstract: true
    })
], VisionListRelationFilter);
exports.VisionListRelationFilter = VisionListRelationFilter;
