"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateInput_1 = require("../../../inputs/ThreadsOnMergeRequestCreateInput");
const ThreadsOnMergeRequestUpdateInput_1 = require("../../../inputs/ThreadsOnMergeRequestUpdateInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let UpsertThreadsOnMergeRequestArgs = class UpsertThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], UpsertThreadsOnMergeRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateInput_1.ThreadsOnMergeRequestCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateInput_1.ThreadsOnMergeRequestCreateInput)
], UpsertThreadsOnMergeRequestArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateInput_1.ThreadsOnMergeRequestUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateInput_1.ThreadsOnMergeRequestUpdateInput)
], UpsertThreadsOnMergeRequestArgs.prototype, "update", void 0);
UpsertThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertThreadsOnMergeRequestArgs);
exports.UpsertThreadsOnMergeRequestArgs = UpsertThreadsOnMergeRequestArgs;
