"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateManyInput_1 = require("../../../inputs/ThreadsOnMergeRequestCreateManyInput");
let CreateManyThreadsOnMergeRequestArgs = class CreateManyThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateManyInput_1.ThreadsOnMergeRequestCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyThreadsOnMergeRequestArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyThreadsOnMergeRequestArgs.prototype, "skipDuplicates", void 0);
CreateManyThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyThreadsOnMergeRequestArgs);
exports.CreateManyThreadsOnMergeRequestArgs = CreateManyThreadsOnMergeRequestArgs;
