"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VisionViewsHistoryCountOrderByAggregateInput = class VisionViewsHistoryCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCountOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryCountOrderByAggregateInput.prototype, "createdAt", void 0);
VisionViewsHistoryCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCountOrderByAggregateInput", {
        isAbstract: true
    })
], VisionViewsHistoryCountOrderByAggregateInput);
exports.VisionViewsHistoryCountOrderByAggregateInput = VisionViewsHistoryCountOrderByAggregateInput;
