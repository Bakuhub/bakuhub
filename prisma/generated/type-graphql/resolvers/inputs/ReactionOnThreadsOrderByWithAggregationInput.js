"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCountOrderByAggregateInput_1 = require("../inputs/ReactionOnThreadsCountOrderByAggregateInput");
const ReactionOnThreadsMaxOrderByAggregateInput_1 = require("../inputs/ReactionOnThreadsMaxOrderByAggregateInput");
const ReactionOnThreadsMinOrderByAggregateInput_1 = require("../inputs/ReactionOnThreadsMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReactionOnThreadsOrderByWithAggregationInput = class ReactionOnThreadsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsOrderByWithAggregationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsOrderByWithAggregationInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCountOrderByAggregateInput_1.ReactionOnThreadsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCountOrderByAggregateInput_1.ReactionOnThreadsCountOrderByAggregateInput)
], ReactionOnThreadsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsMaxOrderByAggregateInput_1.ReactionOnThreadsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsMaxOrderByAggregateInput_1.ReactionOnThreadsMaxOrderByAggregateInput)
], ReactionOnThreadsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsMinOrderByAggregateInput_1.ReactionOnThreadsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsMinOrderByAggregateInput_1.ReactionOnThreadsMinOrderByAggregateInput)
], ReactionOnThreadsOrderByWithAggregationInput.prototype, "_min", void 0);
ReactionOnThreadsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ReactionOnThreadsOrderByWithAggregationInput);
exports.ReactionOnThreadsOrderByWithAggregationInput = ReactionOnThreadsOrderByWithAggregationInput;
