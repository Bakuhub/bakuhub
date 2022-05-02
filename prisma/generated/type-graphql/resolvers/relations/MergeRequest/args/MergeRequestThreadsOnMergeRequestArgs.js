"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestOrderByWithRelationInput_1 = require("../../../inputs/ThreadsOnMergeRequestOrderByWithRelationInput");
const ThreadsOnMergeRequestWhereInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereUniqueInput");
const ThreadsOnMergeRequestScalarFieldEnum_1 = require("../../../../enums/ThreadsOnMergeRequestScalarFieldEnum");
let MergeRequestThreadsOnMergeRequestArgs = class MergeRequestThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], MergeRequestThreadsOnMergeRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestOrderByWithRelationInput_1.ThreadsOnMergeRequestOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MergeRequestThreadsOnMergeRequestArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], MergeRequestThreadsOnMergeRequestArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MergeRequestThreadsOnMergeRequestArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MergeRequestThreadsOnMergeRequestArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarFieldEnum_1.ThreadsOnMergeRequestScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MergeRequestThreadsOnMergeRequestArgs.prototype, "distinct", void 0);
MergeRequestThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], MergeRequestThreadsOnMergeRequestArgs);
exports.MergeRequestThreadsOnMergeRequestArgs = MergeRequestThreadsOnMergeRequestArgs;