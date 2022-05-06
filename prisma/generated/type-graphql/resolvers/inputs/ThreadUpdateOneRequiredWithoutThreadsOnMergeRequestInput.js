"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput");
const ThreadCreateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnMergeRequestInput");
const ThreadUpdateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadUpdateWithoutThreadsOnMergeRequestInput");
const ThreadUpsertWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadUpsertWithoutThreadsOnMergeRequestInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput = class ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnMergeRequestInput_1.ThreadCreateWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnMergeRequestInput_1.ThreadCreateWithoutThreadsOnMergeRequestInput)
], ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput_1.ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput_1.ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput)
], ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpsertWithoutThreadsOnMergeRequestInput_1.ThreadUpsertWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpsertWithoutThreadsOnMergeRequestInput_1.ThreadUpsertWithoutThreadsOnMergeRequestInput)
], ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnMergeRequestInput_1.ThreadUpdateWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutThreadsOnMergeRequestInput_1.ThreadUpdateWithoutThreadsOnMergeRequestInput)
], ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput.prototype, "update", void 0);
ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput", {
        isAbstract: true
    })
], ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput);
exports.ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput = ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput;
