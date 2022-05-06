"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PremisesOnTimelinesCountOrderByAggregateInput = class PremisesOnTimelinesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesCountOrderByAggregateInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesCountOrderByAggregateInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesCountOrderByAggregateInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCountOrderByAggregateInput", {
        isAbstract: true
    })
], PremisesOnTimelinesCountOrderByAggregateInput);
exports.PremisesOnTimelinesCountOrderByAggregateInput = PremisesOnTimelinesCountOrderByAggregateInput;
