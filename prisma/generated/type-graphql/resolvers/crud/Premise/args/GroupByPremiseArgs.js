"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseOrderByWithAggregationInput_1 = require("../../../inputs/PremiseOrderByWithAggregationInput");
const PremiseScalarWhereWithAggregatesInput_1 = require("../../../inputs/PremiseScalarWhereWithAggregatesInput");
const PremiseWhereInput_1 = require("../../../inputs/PremiseWhereInput");
const PremiseScalarFieldEnum_1 = require("../../../../enums/PremiseScalarFieldEnum");
let GroupByPremiseArgs = class GroupByPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereInput_1.PremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereInput_1.PremiseWhereInput)
], GroupByPremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseOrderByWithAggregationInput_1.PremiseOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPremiseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseScalarFieldEnum_1.PremiseScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPremiseArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseScalarWhereWithAggregatesInput_1.PremiseScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseScalarWhereWithAggregatesInput_1.PremiseScalarWhereWithAggregatesInput)
], GroupByPremiseArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPremiseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPremiseArgs.prototype, "skip", void 0);
GroupByPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPremiseArgs);
exports.GroupByPremiseArgs = GroupByPremiseArgs;
