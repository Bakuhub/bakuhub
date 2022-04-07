"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadOrderByWithAggregationInput_1 = require("../../../inputs/ThreadOrderByWithAggregationInput");
const ThreadScalarWhereWithAggregatesInput_1 = require("../../../inputs/ThreadScalarWhereWithAggregatesInput");
const ThreadWhereInput_1 = require("../../../inputs/ThreadWhereInput");
const ThreadScalarFieldEnum_1 = require("../../../../enums/ThreadScalarFieldEnum");
let GroupByThreadArgs = class GroupByThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereInput_1.ThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereInput_1.ThreadWhereInput)
], GroupByThreadArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadOrderByWithAggregationInput_1.ThreadOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThreadArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadScalarFieldEnum_1.ThreadScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThreadArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadScalarWhereWithAggregatesInput_1.ThreadScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadScalarWhereWithAggregatesInput_1.ThreadScalarWhereWithAggregatesInput)
], GroupByThreadArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThreadArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThreadArgs.prototype, "skip", void 0);
GroupByThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByThreadArgs);
exports.GroupByThreadArgs = GroupByThreadArgs;
