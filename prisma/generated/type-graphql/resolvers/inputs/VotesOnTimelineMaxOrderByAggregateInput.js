"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnTimelineMaxOrderByAggregateInput = class VotesOnTimelineMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineMaxOrderByAggregateInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineMaxOrderByAggregateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineMaxOrderByAggregateInput.prototype, "createdAt", void 0);
VotesOnTimelineMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineMaxOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnTimelineMaxOrderByAggregateInput);
exports.VotesOnTimelineMaxOrderByAggregateInput = VotesOnTimelineMaxOrderByAggregateInput;
