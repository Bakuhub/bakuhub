"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VotesOnVisionCountOrderByAggregateInput = class VotesOnVisionCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionCountOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionCountOrderByAggregateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionCountOrderByAggregateInput.prototype, "createdAt", void 0);
VotesOnVisionCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCountOrderByAggregateInput", {
        isAbstract: true
    })
], VotesOnVisionCountOrderByAggregateInput);
exports.VotesOnVisionCountOrderByAggregateInput = VotesOnVisionCountOrderByAggregateInput;
