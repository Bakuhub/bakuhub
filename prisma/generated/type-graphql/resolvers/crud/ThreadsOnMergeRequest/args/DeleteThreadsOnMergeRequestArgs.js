"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let DeleteThreadsOnMergeRequestArgs = class DeleteThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], DeleteThreadsOnMergeRequestArgs.prototype, "where", void 0);
DeleteThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteThreadsOnMergeRequestArgs);
exports.DeleteThreadsOnMergeRequestArgs = DeleteThreadsOnMergeRequestArgs;
