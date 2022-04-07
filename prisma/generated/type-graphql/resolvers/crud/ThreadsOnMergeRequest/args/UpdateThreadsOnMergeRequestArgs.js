"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestUpdateInput_1 = require("../../../inputs/ThreadsOnMergeRequestUpdateInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let UpdateThreadsOnMergeRequestArgs = class UpdateThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateInput_1.ThreadsOnMergeRequestUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateInput_1.ThreadsOnMergeRequestUpdateInput)
], UpdateThreadsOnMergeRequestArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], UpdateThreadsOnMergeRequestArgs.prototype, "where", void 0);
UpdateThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateThreadsOnMergeRequestArgs);
exports.UpdateThreadsOnMergeRequestArgs = UpdateThreadsOnMergeRequestArgs;
