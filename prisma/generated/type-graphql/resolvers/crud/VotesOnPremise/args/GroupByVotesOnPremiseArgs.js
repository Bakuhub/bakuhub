"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseOrderByWithAggregationInput_1 = require("../../../inputs/VotesOnPremiseOrderByWithAggregationInput");
const VotesOnPremiseScalarWhereWithAggregatesInput_1 = require("../../../inputs/VotesOnPremiseScalarWhereWithAggregatesInput");
const VotesOnPremiseWhereInput_1 = require("../../../inputs/VotesOnPremiseWhereInput");
const VotesOnPremiseScalarFieldEnum_1 = require("../../../../enums/VotesOnPremiseScalarFieldEnum");
let GroupByVotesOnPremiseArgs = class GroupByVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput)
], GroupByVotesOnPremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseOrderByWithAggregationInput_1.VotesOnPremiseOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVotesOnPremiseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseScalarFieldEnum_1.VotesOnPremiseScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVotesOnPremiseArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseScalarWhereWithAggregatesInput_1.VotesOnPremiseScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseScalarWhereWithAggregatesInput_1.VotesOnPremiseScalarWhereWithAggregatesInput)
], GroupByVotesOnPremiseArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVotesOnPremiseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVotesOnPremiseArgs.prototype, "skip", void 0);
GroupByVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByVotesOnPremiseArgs);
exports.GroupByVotesOnPremiseArgs = GroupByVotesOnPremiseArgs;
