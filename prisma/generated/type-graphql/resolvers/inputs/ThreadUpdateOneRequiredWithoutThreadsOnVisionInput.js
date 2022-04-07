"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateOneRequiredWithoutThreadsOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadCreateOrConnectWithoutThreadsOnVisionInput");
const ThreadCreateWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnVisionInput");
const ThreadUpdateWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadUpdateWithoutThreadsOnVisionInput");
const ThreadUpsertWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadUpsertWithoutThreadsOnVisionInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateOneRequiredWithoutThreadsOnVisionInput = class ThreadUpdateOneRequiredWithoutThreadsOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnVisionInput_1.ThreadCreateWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnVisionInput_1.ThreadCreateWithoutThreadsOnVisionInput)
], ThreadUpdateOneRequiredWithoutThreadsOnVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnVisionInput_1.ThreadCreateOrConnectWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutThreadsOnVisionInput_1.ThreadCreateOrConnectWithoutThreadsOnVisionInput)
], ThreadUpdateOneRequiredWithoutThreadsOnVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpsertWithoutThreadsOnVisionInput_1.ThreadUpsertWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpsertWithoutThreadsOnVisionInput_1.ThreadUpsertWithoutThreadsOnVisionInput)
], ThreadUpdateOneRequiredWithoutThreadsOnVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpdateOneRequiredWithoutThreadsOnVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnVisionInput_1.ThreadUpdateWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutThreadsOnVisionInput_1.ThreadUpdateWithoutThreadsOnVisionInput)
], ThreadUpdateOneRequiredWithoutThreadsOnVisionInput.prototype, "update", void 0);
ThreadUpdateOneRequiredWithoutThreadsOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutThreadsOnVisionInput", {
        isAbstract: true
    })
], ThreadUpdateOneRequiredWithoutThreadsOnVisionInput);
exports.ThreadUpdateOneRequiredWithoutThreadsOnVisionInput = ThreadUpdateOneRequiredWithoutThreadsOnVisionInput;
