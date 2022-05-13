"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCountOrderByAggregateInput_1 = require("../inputs/VisionViewsHistoryCountOrderByAggregateInput");
const VisionViewsHistoryMaxOrderByAggregateInput_1 = require("../inputs/VisionViewsHistoryMaxOrderByAggregateInput");
const VisionViewsHistoryMinOrderByAggregateInput_1 = require("../inputs/VisionViewsHistoryMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VisionViewsHistoryOrderByWithAggregationInput = class VisionViewsHistoryOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryOrderByWithAggregationInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VisionViewsHistoryOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCountOrderByAggregateInput_1.VisionViewsHistoryCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCountOrderByAggregateInput_1.VisionViewsHistoryCountOrderByAggregateInput)
], VisionViewsHistoryOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryMaxOrderByAggregateInput_1.VisionViewsHistoryMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryMaxOrderByAggregateInput_1.VisionViewsHistoryMaxOrderByAggregateInput)
], VisionViewsHistoryOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryMinOrderByAggregateInput_1.VisionViewsHistoryMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryMinOrderByAggregateInput_1.VisionViewsHistoryMinOrderByAggregateInput)
], VisionViewsHistoryOrderByWithAggregationInput.prototype, "_min", void 0);
VisionViewsHistoryOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryOrderByWithAggregationInput", {
        isAbstract: true
    })
], VisionViewsHistoryOrderByWithAggregationInput);
exports.VisionViewsHistoryOrderByWithAggregationInput = VisionViewsHistoryOrderByWithAggregationInput;
