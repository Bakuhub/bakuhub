"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestWhereInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereInput");
let DeleteManyThreadsOnMergeRequestArgs = class DeleteManyThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], DeleteManyThreadsOnMergeRequestArgs.prototype, "where", void 0);
DeleteManyThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyThreadsOnMergeRequestArgs);
exports.DeleteManyThreadsOnMergeRequestArgs = DeleteManyThreadsOnMergeRequestArgs;
