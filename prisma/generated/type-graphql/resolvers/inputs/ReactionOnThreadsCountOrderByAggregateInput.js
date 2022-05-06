"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnThreadsCountOrderByAggregateInput = class ReactionOnThreadsCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCountOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCountOrderByAggregateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCountOrderByAggregateInput.prototype, "createdAt", void 0);
ReactionOnThreadsCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCountOrderByAggregateInput", {
        isAbstract: true
    })
], ReactionOnThreadsCountOrderByAggregateInput);
exports.ReactionOnThreadsCountOrderByAggregateInput = ReactionOnThreadsCountOrderByAggregateInput;
