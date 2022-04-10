"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnTimelineSumOrderByAggregateInput = class VotesOnTimelineSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineSumOrderByAggregateInput.prototype, "vote", void 0);
VotesOnTimelineSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineSumOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnTimelineSumOrderByAggregateInput);
exports.VotesOnTimelineSumOrderByAggregateInput = VotesOnTimelineSumOrderByAggregateInput;
