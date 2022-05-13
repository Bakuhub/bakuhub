"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVisionViewsHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryOrderByWithAggregationInput_1 = require("../../../inputs/VisionViewsHistoryOrderByWithAggregationInput");
const VisionViewsHistoryScalarWhereWithAggregatesInput_1 = require("../../../inputs/VisionViewsHistoryScalarWhereWithAggregatesInput");
const VisionViewsHistoryWhereInput_1 = require("../../../inputs/VisionViewsHistoryWhereInput");
const VisionViewsHistoryScalarFieldEnum_1 = require("../../../../enums/VisionViewsHistoryScalarFieldEnum");
let GroupByVisionViewsHistoryArgs = class GroupByVisionViewsHistoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput)
], GroupByVisionViewsHistoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryOrderByWithAggregationInput_1.VisionViewsHistoryOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVisionViewsHistoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryScalarFieldEnum_1.VisionViewsHistoryScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVisionViewsHistoryArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryScalarWhereWithAggregatesInput_1.VisionViewsHistoryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryScalarWhereWithAggregatesInput_1.VisionViewsHistoryScalarWhereWithAggregatesInput)
], GroupByVisionViewsHistoryArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVisionViewsHistoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVisionViewsHistoryArgs.prototype, "skip", void 0);
GroupByVisionViewsHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByVisionViewsHistoryArgs);
exports.GroupByVisionViewsHistoryArgs = GroupByVisionViewsHistoryArgs;
