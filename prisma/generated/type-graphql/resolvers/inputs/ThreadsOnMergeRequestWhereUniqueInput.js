"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestThreadIdMergeRequestIdCompoundUniqueInput_1 = require("../inputs/ThreadsOnMergeRequestThreadIdMergeRequestIdCompoundUniqueInput");
let ThreadsOnMergeRequestWhereUniqueInput = class ThreadsOnMergeRequestWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestWhereUniqueInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestThreadIdMergeRequestIdCompoundUniqueInput_1.ThreadsOnMergeRequestThreadIdMergeRequestIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestThreadIdMergeRequestIdCompoundUniqueInput_1.ThreadsOnMergeRequestThreadIdMergeRequestIdCompoundUniqueInput)
], ThreadsOnMergeRequestWhereUniqueInput.prototype, "threadId_mergeRequestId", void 0);
ThreadsOnMergeRequestWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestWhereUniqueInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestWhereUniqueInput);
exports.ThreadsOnMergeRequestWhereUniqueInput = ThreadsOnMergeRequestWhereUniqueInput;
