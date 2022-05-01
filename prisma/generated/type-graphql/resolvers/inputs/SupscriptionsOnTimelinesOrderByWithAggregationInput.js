"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCountOrderByAggregateInput_1 = require("../inputs/SupscriptionsOnTimelinesCountOrderByAggregateInput");
const SupscriptionsOnTimelinesMaxOrderByAggregateInput_1 = require("../inputs/SupscriptionsOnTimelinesMaxOrderByAggregateInput");
const SupscriptionsOnTimelinesMinOrderByAggregateInput_1 = require("../inputs/SupscriptionsOnTimelinesMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SupscriptionsOnTimelinesOrderByWithAggregationInput = class SupscriptionsOnTimelinesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCountOrderByAggregateInput_1.SupscriptionsOnTimelinesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCountOrderByAggregateInput_1.SupscriptionsOnTimelinesCountOrderByAggregateInput)
], SupscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesMaxOrderByAggregateInput_1.SupscriptionsOnTimelinesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesMaxOrderByAggregateInput_1.SupscriptionsOnTimelinesMaxOrderByAggregateInput)
], SupscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesMinOrderByAggregateInput_1.SupscriptionsOnTimelinesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesMinOrderByAggregateInput_1.SupscriptionsOnTimelinesMinOrderByAggregateInput)
], SupscriptionsOnTimelinesOrderByWithAggregationInput.prototype, "_min", void 0);
SupscriptionsOnTimelinesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesOrderByWithAggregationInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesOrderByWithAggregationInput);
exports.SupscriptionsOnTimelinesOrderByWithAggregationInput = SupscriptionsOnTimelinesOrderByWithAggregationInput;
