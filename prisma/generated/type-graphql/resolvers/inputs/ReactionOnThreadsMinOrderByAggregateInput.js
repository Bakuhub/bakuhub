"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnThreadsMinOrderByAggregateInput = class ReactionOnThreadsMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMinOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMinOrderByAggregateInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMinOrderByAggregateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMinOrderByAggregateInput.prototype, "createdAt", void 0);
ReactionOnThreadsMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsMinOrderByAggregateInput", {
        isAbstract: true
    })
], ReactionOnThreadsMinOrderByAggregateInput);
exports.ReactionOnThreadsMinOrderByAggregateInput = ReactionOnThreadsMinOrderByAggregateInput;
