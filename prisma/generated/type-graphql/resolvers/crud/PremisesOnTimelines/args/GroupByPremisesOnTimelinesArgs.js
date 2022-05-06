"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPremisesOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesOrderByWithAggregationInput_1 = require("../../../inputs/PremisesOnTimelinesOrderByWithAggregationInput");
const PremisesOnTimelinesScalarWhereWithAggregatesInput_1 = require("../../../inputs/PremisesOnTimelinesScalarWhereWithAggregatesInput");
const PremisesOnTimelinesWhereInput_1 = require("../../../inputs/PremisesOnTimelinesWhereInput");
const PremisesOnTimelinesScalarFieldEnum_1 = require("../../../../enums/PremisesOnTimelinesScalarFieldEnum");
let GroupByPremisesOnTimelinesArgs = class GroupByPremisesOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput)
], GroupByPremisesOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesOrderByWithAggregationInput_1.PremisesOnTimelinesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPremisesOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarFieldEnum_1.PremisesOnTimelinesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPremisesOnTimelinesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesScalarWhereWithAggregatesInput_1.PremisesOnTimelinesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesScalarWhereWithAggregatesInput_1.PremisesOnTimelinesScalarWhereWithAggregatesInput)
], GroupByPremisesOnTimelinesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPremisesOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPremisesOnTimelinesArgs.prototype, "skip", void 0);
GroupByPremisesOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPremisesOnTimelinesArgs);
exports.GroupByPremisesOnTimelinesArgs = GroupByPremisesOnTimelinesArgs;
