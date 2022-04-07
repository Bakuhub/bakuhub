"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadCreateOrConnectWithoutThreadsOnTimelineInput");
const ThreadCreateWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnTimelineInput");
const ThreadUpdateWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadUpdateWithoutThreadsOnTimelineInput");
const ThreadUpsertWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadUpsertWithoutThreadsOnTimelineInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput = class ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnTimelineInput_1.ThreadCreateWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnTimelineInput_1.ThreadCreateWithoutThreadsOnTimelineInput)
], ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnTimelineInput_1.ThreadCreateOrConnectWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutThreadsOnTimelineInput_1.ThreadCreateOrConnectWithoutThreadsOnTimelineInput)
], ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpsertWithoutThreadsOnTimelineInput_1.ThreadUpsertWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpsertWithoutThreadsOnTimelineInput_1.ThreadUpsertWithoutThreadsOnTimelineInput)
], ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnTimelineInput_1.ThreadUpdateWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutThreadsOnTimelineInput_1.ThreadUpdateWithoutThreadsOnTimelineInput)
], ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput.prototype, "update", void 0);
ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput", {
        isAbstract: true
    })
], ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput);
exports.ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput = ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput;
