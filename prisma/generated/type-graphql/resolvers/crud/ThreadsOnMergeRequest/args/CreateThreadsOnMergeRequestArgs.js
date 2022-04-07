"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateInput_1 = require("../../../inputs/ThreadsOnMergeRequestCreateInput");
let CreateThreadsOnMergeRequestArgs = class CreateThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateInput_1.ThreadsOnMergeRequestCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateInput_1.ThreadsOnMergeRequestCreateInput)
], CreateThreadsOnMergeRequestArgs.prototype, "data", void 0);
CreateThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateThreadsOnMergeRequestArgs);
exports.CreateThreadsOnMergeRequestArgs = CreateThreadsOnMergeRequestArgs;
