"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PremisesOnTimelinesMinOrderByAggregateInput = class PremisesOnTimelinesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesMinOrderByAggregateInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesMinOrderByAggregateInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesMinOrderByAggregateInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesMinOrderByAggregateInput", {
        isAbstract: true
    })
], PremisesOnTimelinesMinOrderByAggregateInput);
exports.PremisesOnTimelinesMinOrderByAggregateInput = PremisesOnTimelinesMinOrderByAggregateInput;
