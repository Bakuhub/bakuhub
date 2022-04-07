"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReferenceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceOrderByWithAggregationInput_1 = require("../../../inputs/ReferenceOrderByWithAggregationInput");
const ReferenceScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReferenceScalarWhereWithAggregatesInput");
const ReferenceWhereInput_1 = require("../../../inputs/ReferenceWhereInput");
const ReferenceScalarFieldEnum_1 = require("../../../../enums/ReferenceScalarFieldEnum");
let GroupByReferenceArgs = class GroupByReferenceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], GroupByReferenceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceOrderByWithAggregationInput_1.ReferenceOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReferenceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceScalarFieldEnum_1.ReferenceScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReferenceArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceScalarWhereWithAggregatesInput_1.ReferenceScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceScalarWhereWithAggregatesInput_1.ReferenceScalarWhereWithAggregatesInput)
], GroupByReferenceArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReferenceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReferenceArgs.prototype, "skip", void 0);
GroupByReferenceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReferenceArgs);
exports.GroupByReferenceArgs = GroupByReferenceArgs;
