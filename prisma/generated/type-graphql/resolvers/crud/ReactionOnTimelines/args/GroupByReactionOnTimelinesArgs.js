"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReactionOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesOrderByWithAggregationInput_1 = require("../../../inputs/ReactionOnTimelinesOrderByWithAggregationInput");
const ReactionOnTimelinesScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReactionOnTimelinesScalarWhereWithAggregatesInput");
const ReactionOnTimelinesWhereInput_1 = require("../../../inputs/ReactionOnTimelinesWhereInput");
const ReactionOnTimelinesScalarFieldEnum_1 = require("../../../../enums/ReactionOnTimelinesScalarFieldEnum");
let GroupByReactionOnTimelinesArgs = class GroupByReactionOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput)
], GroupByReactionOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesOrderByWithAggregationInput_1.ReactionOnTimelinesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReactionOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarFieldEnum_1.ReactionOnTimelinesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReactionOnTimelinesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesScalarWhereWithAggregatesInput_1.ReactionOnTimelinesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesScalarWhereWithAggregatesInput_1.ReactionOnTimelinesScalarWhereWithAggregatesInput)
], GroupByReactionOnTimelinesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReactionOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReactionOnTimelinesArgs.prototype, "skip", void 0);
GroupByReactionOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReactionOnTimelinesArgs);
exports.GroupByReactionOnTimelinesArgs = GroupByReactionOnTimelinesArgs;
