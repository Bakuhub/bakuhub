"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReactionOnThreadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsOrderByWithAggregationInput_1 = require("../../../inputs/ReactionOnThreadsOrderByWithAggregationInput");
const ReactionOnThreadsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReactionOnThreadsScalarWhereWithAggregatesInput");
const ReactionOnThreadsWhereInput_1 = require("../../../inputs/ReactionOnThreadsWhereInput");
const ReactionOnThreadsScalarFieldEnum_1 = require("../../../../enums/ReactionOnThreadsScalarFieldEnum");
let GroupByReactionOnThreadsArgs = class GroupByReactionOnThreadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput)
], GroupByReactionOnThreadsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsOrderByWithAggregationInput_1.ReactionOnThreadsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReactionOnThreadsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsScalarFieldEnum_1.ReactionOnThreadsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReactionOnThreadsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsScalarWhereWithAggregatesInput_1.ReactionOnThreadsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsScalarWhereWithAggregatesInput_1.ReactionOnThreadsScalarWhereWithAggregatesInput)
], GroupByReactionOnThreadsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReactionOnThreadsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReactionOnThreadsArgs.prototype, "skip", void 0);
GroupByReactionOnThreadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReactionOnThreadsArgs);
exports.GroupByReactionOnThreadsArgs = GroupByReactionOnThreadsArgs;
