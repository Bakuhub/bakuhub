"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnTimelineAvgOrderByAggregateInput = class VotesOnTimelineAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineAvgOrderByAggregateInput.prototype, "vote", void 0);
VotesOnTimelineAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineAvgOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnTimelineAvgOrderByAggregateInput);
exports.VotesOnTimelineAvgOrderByAggregateInput = VotesOnTimelineAvgOrderByAggregateInput;
