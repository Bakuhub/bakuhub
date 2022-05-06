"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionOrderByWithAggregationInput_1 = require("../../../inputs/VisionOrderByWithAggregationInput");
const VisionScalarWhereWithAggregatesInput_1 = require("../../../inputs/VisionScalarWhereWithAggregatesInput");
const VisionWhereInput_1 = require("../../../inputs/VisionWhereInput");
const VisionScalarFieldEnum_1 = require("../../../../enums/VisionScalarFieldEnum");
let GroupByVisionArgs = class GroupByVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereInput_1.VisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereInput_1.VisionWhereInput)
], GroupByVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionOrderByWithAggregationInput_1.VisionOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVisionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionScalarFieldEnum_1.VisionScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByVisionArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionScalarWhereWithAggregatesInput_1.VisionScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionScalarWhereWithAggregatesInput_1.VisionScalarWhereWithAggregatesInput)
], GroupByVisionArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVisionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByVisionArgs.prototype, "skip", void 0);
GroupByVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByVisionArgs);
exports.GroupByVisionArgs = GroupByVisionArgs;
