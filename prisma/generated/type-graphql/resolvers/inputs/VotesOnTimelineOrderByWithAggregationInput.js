"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineAvgOrderByAggregateInput_1 = require("../inputs/VotesOnTimelineAvgOrderByAggregateInput");
const VotesOnTimelineCountOrderByAggregateInput_1 = require("../inputs/VotesOnTimelineCountOrderByAggregateInput");
const VotesOnTimelineMaxOrderByAggregateInput_1 = require("../inputs/VotesOnTimelineMaxOrderByAggregateInput");
const VotesOnTimelineMinOrderByAggregateInput_1 = require("../inputs/VotesOnTimelineMinOrderByAggregateInput");
const VotesOnTimelineSumOrderByAggregateInput_1 = require("../inputs/VotesOnTimelineSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnTimelineOrderByWithAggregationInput = class VotesOnTimelineOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineOrderByWithAggregationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineOrderByWithAggregationInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCountOrderByAggregateInput_1.VotesOnTimelineCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCountOrderByAggregateInput_1.VotesOnTimelineCountOrderByAggregateInput)
], VotesOnTimelineOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineAvgOrderByAggregateInput_1.VotesOnTimelineAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineAvgOrderByAggregateInput_1.VotesOnTimelineAvgOrderByAggregateInput)
], VotesOnTimelineOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineMaxOrderByAggregateInput_1.VotesOnTimelineMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineMaxOrderByAggregateInput_1.VotesOnTimelineMaxOrderByAggregateInput)
], VotesOnTimelineOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineMinOrderByAggregateInput_1.VotesOnTimelineMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineMinOrderByAggregateInput_1.VotesOnTimelineMinOrderByAggregateInput)
], VotesOnTimelineOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineSumOrderByAggregateInput_1.VotesOnTimelineSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineSumOrderByAggregateInput_1.VotesOnTimelineSumOrderByAggregateInput)
], VotesOnTimelineOrderByWithAggregationInput.prototype, "_sum", void 0);
VotesOnTimelineOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineOrderByWithAggregationInput", {
        isAbstract: true
    })
], VotesOnTimelineOrderByWithAggregationInput);
exports.VotesOnTimelineOrderByWithAggregationInput = VotesOnTimelineOrderByWithAggregationInput;
