"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestUpdateManyMutationInput_1 = require("../../../inputs/ThreadsOnMergeRequestUpdateManyMutationInput");
const ThreadsOnMergeRequestWhereInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereInput");
let UpdateManyThreadsOnMergeRequestArgs = class UpdateManyThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateManyMutationInput_1.ThreadsOnMergeRequestUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateManyMutationInput_1.ThreadsOnMergeRequestUpdateManyMutationInput)
], UpdateManyThreadsOnMergeRequestArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], UpdateManyThreadsOnMergeRequestArgs.prototype, "where", void 0);
UpdateManyThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyThreadsOnMergeRequestArgs);
exports.UpdateManyThreadsOnMergeRequestArgs = UpdateManyThreadsOnMergeRequestArgs;
