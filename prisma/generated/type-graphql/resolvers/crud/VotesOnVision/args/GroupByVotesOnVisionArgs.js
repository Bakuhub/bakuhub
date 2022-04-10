"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionOrderByWithAggregationInput_1 = require("../../../inputs/VotesOnVisionOrderByWithAggregationInput");
const VotesOnVisionScalarWhereWithAggregatesInput_1 = require("../../../inputs/VotesOnVisionScalarWhereWithAggregatesInput");
const VotesOnVisionWhereInput_1 = require("../../../inputs/VotesOnVisionWhereInput");
const VotesOnVisionScalarFieldEnum_1 = require("../../../../enums/VotesOnVisionScalarFieldEnum");
let GroupByVotesOnVisionArgs = class GroupByVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereInput_1.VotesOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereInput_1.VotesOnVisionWhereInput)
], GroupByVotesOnVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionOrderByWithAggregationInput_1.VotesOnVisionOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVotesOnVisionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionScalarFieldEnum_1.VotesOnVisionScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVotesOnVisionArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionScalarWhereWithAggregatesInput_1.VotesOnVisionScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionScalarWhereWithAggregatesInput_1.VotesOnVisionScalarWhereWithAggregatesInput)
], GroupByVotesOnVisionArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVotesOnVisionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVotesOnVisionArgs.prototype, "skip", void 0);
GroupByVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByVotesOnVisionArgs);
exports.GroupByVotesOnVisionArgs = GroupByVotesOnVisionArgs;
