"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineOrderByWithAggregationInput_1 = require("../../../inputs/TimelineOrderByWithAggregationInput");
const TimelineScalarWhereWithAggregatesInput_1 = require("../../../inputs/TimelineScalarWhereWithAggregatesInput");
const TimelineWhereInput_1 = require("../../../inputs/TimelineWhereInput");
const TimelineScalarFieldEnum_1 = require("../../../../enums/TimelineScalarFieldEnum");
let GroupByTimelineArgs = class GroupByTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereInput_1.TimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereInput_1.TimelineWhereInput)
], GroupByTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineOrderByWithAggregationInput_1.TimelineOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTimelineArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineScalarFieldEnum_1.TimelineScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTimelineArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineScalarWhereWithAggregatesInput_1.TimelineScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineScalarWhereWithAggregatesInput_1.TimelineScalarWhereWithAggregatesInput)
], GroupByTimelineArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTimelineArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTimelineArgs.prototype, "skip", void 0);
GroupByTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTimelineArgs);
exports.GroupByTimelineArgs = GroupByTimelineArgs;
