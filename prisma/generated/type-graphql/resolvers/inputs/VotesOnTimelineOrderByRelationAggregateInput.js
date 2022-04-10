"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnTimelineOrderByRelationAggregateInput = class VotesOnTimelineOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineOrderByRelationAggregateInput.prototype, "_count", void 0);
VotesOnTimelineOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineOrderByRelationAggregateInput", {
        isAbstract: true
    })
], VotesOnTimelineOrderByRelationAggregateInput);
exports.VotesOnTimelineOrderByRelationAggregateInput = VotesOnTimelineOrderByRelationAggregateInput;
