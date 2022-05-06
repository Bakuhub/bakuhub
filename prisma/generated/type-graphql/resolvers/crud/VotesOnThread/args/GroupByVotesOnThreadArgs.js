"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadOrderByWithAggregationInput_1 = require("../../../inputs/VotesOnThreadOrderByWithAggregationInput");
const VotesOnThreadScalarWhereWithAggregatesInput_1 = require("../../../inputs/VotesOnThreadScalarWhereWithAggregatesInput");
const VotesOnThreadWhereInput_1 = require("../../../inputs/VotesOnThreadWhereInput");
const VotesOnThreadScalarFieldEnum_1 = require("../../../../enums/VotesOnThreadScalarFieldEnum");
let GroupByVotesOnThreadArgs = class GroupByVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereInput_1.VotesOnThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereInput_1.VotesOnThreadWhereInput)
], GroupByVotesOnThreadArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadOrderByWithAggregationInput_1.VotesOnThreadOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVotesOnThreadArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadScalarFieldEnum_1.VotesOnThreadScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVotesOnThreadArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadScalarWhereWithAggregatesInput_1.VotesOnThreadScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadScalarWhereWithAggregatesInput_1.VotesOnThreadScalarWhereWithAggregatesInput)
], GroupByVotesOnThreadArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVotesOnThreadArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVotesOnThreadArgs.prototype, "skip", void 0);
GroupByVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByVotesOnThreadArgs);
exports.GroupByVotesOnThreadArgs = GroupByVotesOnThreadArgs;
