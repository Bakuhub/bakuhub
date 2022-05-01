"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySupscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesOrderByWithAggregationInput_1 = require("../../../inputs/SupscriptionsOnTimelinesOrderByWithAggregationInput");
const SupscriptionsOnTimelinesScalarWhereWithAggregatesInput_1 = require("../../../inputs/SupscriptionsOnTimelinesScalarWhereWithAggregatesInput");
const SupscriptionsOnTimelinesWhereInput_1 = require("../../../inputs/SupscriptionsOnTimelinesWhereInput");
const SupscriptionsOnTimelinesScalarFieldEnum_1 = require("../../../../enums/SupscriptionsOnTimelinesScalarFieldEnum");
let GroupBySupscriptionsOnTimelinesArgs = class GroupBySupscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput)
], GroupBySupscriptionsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesOrderByWithAggregationInput_1.SupscriptionsOnTimelinesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySupscriptionsOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesScalarFieldEnum_1.SupscriptionsOnTimelinesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySupscriptionsOnTimelinesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesScalarWhereWithAggregatesInput_1.SupscriptionsOnTimelinesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesScalarWhereWithAggregatesInput_1.SupscriptionsOnTimelinesScalarWhereWithAggregatesInput)
], GroupBySupscriptionsOnTimelinesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySupscriptionsOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySupscriptionsOnTimelinesArgs.prototype, "skip", void 0);
GroupBySupscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySupscriptionsOnTimelinesArgs);
exports.GroupBySupscriptionsOnTimelinesArgs = GroupBySupscriptionsOnTimelinesArgs;
