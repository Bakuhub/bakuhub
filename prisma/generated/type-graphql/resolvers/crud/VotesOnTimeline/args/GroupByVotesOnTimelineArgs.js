"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVotesOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineOrderByWithAggregationInput_1 = require("../../../inputs/VotesOnTimelineOrderByWithAggregationInput");
const VotesOnTimelineScalarWhereWithAggregatesInput_1 = require("../../../inputs/VotesOnTimelineScalarWhereWithAggregatesInput");
const VotesOnTimelineWhereInput_1 = require("../../../inputs/VotesOnTimelineWhereInput");
const VotesOnTimelineScalarFieldEnum_1 = require("../../../../enums/VotesOnTimelineScalarFieldEnum");
let GroupByVotesOnTimelineArgs = class GroupByVotesOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput)
], GroupByVotesOnTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineOrderByWithAggregationInput_1.VotesOnTimelineOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVotesOnTimelineArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineScalarFieldEnum_1.VotesOnTimelineScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVotesOnTimelineArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineScalarWhereWithAggregatesInput_1.VotesOnTimelineScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineScalarWhereWithAggregatesInput_1.VotesOnTimelineScalarWhereWithAggregatesInput)
], GroupByVotesOnTimelineArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVotesOnTimelineArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVotesOnTimelineArgs.prototype, "skip", void 0);
GroupByVotesOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByVotesOnTimelineArgs);
exports.GroupByVotesOnTimelineArgs = GroupByVotesOnTimelineArgs;
