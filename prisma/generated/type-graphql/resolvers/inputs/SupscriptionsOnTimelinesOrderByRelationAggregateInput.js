"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SupscriptionsOnTimelinesOrderByRelationAggregateInput = class SupscriptionsOnTimelinesOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesOrderByRelationAggregateInput.prototype, "_count", void 0);
SupscriptionsOnTimelinesOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesOrderByRelationAggregateInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesOrderByRelationAggregateInput);
exports.SupscriptionsOnTimelinesOrderByRelationAggregateInput = SupscriptionsOnTimelinesOrderByRelationAggregateInput;
