"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReactionOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsOrderByWithAggregationInput_1 = require("../../../inputs/ReactionOnVisionsOrderByWithAggregationInput");
const ReactionOnVisionsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReactionOnVisionsScalarWhereWithAggregatesInput");
const ReactionOnVisionsWhereInput_1 = require("../../../inputs/ReactionOnVisionsWhereInput");
const ReactionOnVisionsScalarFieldEnum_1 = require("../../../../enums/ReactionOnVisionsScalarFieldEnum");
let GroupByReactionOnVisionsArgs = class GroupByReactionOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput)
], GroupByReactionOnVisionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsOrderByWithAggregationInput_1.ReactionOnVisionsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReactionOnVisionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsScalarFieldEnum_1.ReactionOnVisionsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReactionOnVisionsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsScalarWhereWithAggregatesInput_1.ReactionOnVisionsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsScalarWhereWithAggregatesInput_1.ReactionOnVisionsScalarWhereWithAggregatesInput)
], GroupByReactionOnVisionsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReactionOnVisionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReactionOnVisionsArgs.prototype, "skip", void 0);
GroupByReactionOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReactionOnVisionsArgs);
exports.GroupByReactionOnVisionsArgs = GroupByReactionOnVisionsArgs;
