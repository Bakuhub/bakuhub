"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VisionViewsHistoryMaxOrderByAggregateInput = class VisionViewsHistoryMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryMaxOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryMaxOrderByAggregateInput.prototype, "createdAt", void 0);
VisionViewsHistoryMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryMaxOrderByAggregateInput", {
        isAbstract: true
    })
], VisionViewsHistoryMaxOrderByAggregateInput);
exports.VisionViewsHistoryMaxOrderByAggregateInput = VisionViewsHistoryMaxOrderByAggregateInput;
