"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCountOrderByAggregateInput_1 = require("../inputs/PremisesOnTimelinesCountOrderByAggregateInput");
const PremisesOnTimelinesMaxOrderByAggregateInput_1 = require("../inputs/PremisesOnTimelinesMaxOrderByAggregateInput");
const PremisesOnTimelinesMinOrderByAggregateInput_1 = require("../inputs/PremisesOnTimelinesMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PremisesOnTimelinesOrderByWithAggregationInput = class PremisesOnTimelinesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesOrderByWithAggregationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesOrderByWithAggregationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesOrderByWithAggregationInput.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCountOrderByAggregateInput_1.PremisesOnTimelinesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCountOrderByAggregateInput_1.PremisesOnTimelinesCountOrderByAggregateInput)
], PremisesOnTimelinesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesMaxOrderByAggregateInput_1.PremisesOnTimelinesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesMaxOrderByAggregateInput_1.PremisesOnTimelinesMaxOrderByAggregateInput)
], PremisesOnTimelinesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesMinOrderByAggregateInput_1.PremisesOnTimelinesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesMinOrderByAggregateInput_1.PremisesOnTimelinesMinOrderByAggregateInput)
], PremisesOnTimelinesOrderByWithAggregationInput.prototype, "_min", void 0);
PremisesOnTimelinesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesOrderByWithAggregationInput", {
        isAbstract: true
    })
], PremisesOnTimelinesOrderByWithAggregationInput);
exports.PremisesOnTimelinesOrderByWithAggregationInput = PremisesOnTimelinesOrderByWithAggregationInput;
