"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryWhereInput_1 = require("../inputs/VisionViewsHistoryWhereInput");
let VisionViewsHistoryListRelationFilter = class VisionViewsHistoryListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput)
], VisionViewsHistoryListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput)
], VisionViewsHistoryListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput)
], VisionViewsHistoryListRelationFilter.prototype, "none", void 0);
VisionViewsHistoryListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryListRelationFilter", {
        isAbstract: true
    })
], VisionViewsHistoryListRelationFilter);
exports.VisionViewsHistoryListRelationFilter = VisionViewsHistoryListRelationFilter;
