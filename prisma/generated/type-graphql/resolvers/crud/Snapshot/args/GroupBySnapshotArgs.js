"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySnapshotArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotOrderByWithAggregationInput_1 = require("../../../inputs/SnapshotOrderByWithAggregationInput");
const SnapshotScalarWhereWithAggregatesInput_1 = require("../../../inputs/SnapshotScalarWhereWithAggregatesInput");
const SnapshotWhereInput_1 = require("../../../inputs/SnapshotWhereInput");
const SnapshotScalarFieldEnum_1 = require("../../../../enums/SnapshotScalarFieldEnum");
let GroupBySnapshotArgs = class GroupBySnapshotArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereInput_1.SnapshotWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotWhereInput_1.SnapshotWhereInput)
], GroupBySnapshotArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotOrderByWithAggregationInput_1.SnapshotOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySnapshotArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotScalarFieldEnum_1.SnapshotScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySnapshotArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotScalarWhereWithAggregatesInput_1.SnapshotScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotScalarWhereWithAggregatesInput_1.SnapshotScalarWhereWithAggregatesInput)
], GroupBySnapshotArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySnapshotArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySnapshotArgs.prototype, "skip", void 0);
GroupBySnapshotArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySnapshotArgs);
exports.GroupBySnapshotArgs = GroupBySnapshotArgs;
