"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestOrderByWithRelationInput_1 = require("../../../inputs/ThreadsOnMergeRequestOrderByWithRelationInput");
const ThreadsOnMergeRequestWhereInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereUniqueInput");
const ThreadsOnMergeRequestScalarFieldEnum_1 = require("../../../../enums/ThreadsOnMergeRequestScalarFieldEnum");
let FindManyThreadsOnMergeRequestArgs = class FindManyThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], FindManyThreadsOnMergeRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestOrderByWithRelationInput_1.ThreadsOnMergeRequestOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyThreadsOnMergeRequestArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], FindManyThreadsOnMergeRequestArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyThreadsOnMergeRequestArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyThreadsOnMergeRequestArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarFieldEnum_1.ThreadsOnMergeRequestScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyThreadsOnMergeRequestArgs.prototype, "distinct", void 0);
FindManyThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyThreadsOnMergeRequestArgs);
exports.FindManyThreadsOnMergeRequestArgs = FindManyThreadsOnMergeRequestArgs;
