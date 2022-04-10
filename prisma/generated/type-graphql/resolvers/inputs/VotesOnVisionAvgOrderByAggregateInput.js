"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnVisionAvgOrderByAggregateInput = class VotesOnVisionAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionAvgOrderByAggregateInput.prototype, "vote", void 0);
VotesOnVisionAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionAvgOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnVisionAvgOrderByAggregateInput);
exports.VotesOnVisionAvgOrderByAggregateInput = VotesOnVisionAvgOrderByAggregateInput;
