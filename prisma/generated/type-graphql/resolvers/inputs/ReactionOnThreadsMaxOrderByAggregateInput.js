"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnThreadsMaxOrderByAggregateInput = class ReactionOnThreadsMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMaxOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMaxOrderByAggregateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMaxOrderByAggregateInput.prototype, "createdAt", void 0);
ReactionOnThreadsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ReactionOnThreadsMaxOrderByAggregateInput);
exports.ReactionOnThreadsMaxOrderByAggregateInput = ReactionOnThreadsMaxOrderByAggregateInput;
