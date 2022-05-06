"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let FindUniqueThreadsOnMergeRequestArgs = class FindUniqueThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], FindUniqueThreadsOnMergeRequestArgs.prototype, "where", void 0);
FindUniqueThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueThreadsOnMergeRequestArgs);
exports.FindUniqueThreadsOnMergeRequestArgs = FindUniqueThreadsOnMergeRequestArgs;
