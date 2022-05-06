"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateOneRequiredWithoutReactionOnThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadCreateOrConnectWithoutReactionOnThreadsInput");
const ThreadCreateWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadCreateWithoutReactionOnThreadsInput");
const ThreadUpdateWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadUpdateWithoutReactionOnThreadsInput");
const ThreadUpsertWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadUpsertWithoutReactionOnThreadsInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateOneRequiredWithoutReactionOnThreadsInput = class ThreadUpdateOneRequiredWithoutReactionOnThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutReactionOnThreadsInput_1.ThreadCreateWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutReactionOnThreadsInput_1.ThreadCreateWithoutReactionOnThreadsInput)
], ThreadUpdateOneRequiredWithoutReactionOnThreadsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutReactionOnThreadsInput_1.ThreadCreateOrConnectWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutReactionOnThreadsInput_1.ThreadCreateOrConnectWithoutReactionOnThreadsInput)
], ThreadUpdateOneRequiredWithoutReactionOnThreadsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpsertWithoutReactionOnThreadsInput_1.ThreadUpsertWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpsertWithoutReactionOnThreadsInput_1.ThreadUpsertWithoutReactionOnThreadsInput)
], ThreadUpdateOneRequiredWithoutReactionOnThreadsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpdateOneRequiredWithoutReactionOnThreadsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutReactionOnThreadsInput_1.ThreadUpdateWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutReactionOnThreadsInput_1.ThreadUpdateWithoutReactionOnThreadsInput)
], ThreadUpdateOneRequiredWithoutReactionOnThreadsInput.prototype, "update", void 0);
ThreadUpdateOneRequiredWithoutReactionOnThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutReactionOnThreadsInput", {
        isAbstract: true
    })
], ThreadUpdateOneRequiredWithoutReactionOnThreadsInput);
exports.ThreadUpdateOneRequiredWithoutReactionOnThreadsInput = ThreadUpdateOneRequiredWithoutReactionOnThreadsInput;
