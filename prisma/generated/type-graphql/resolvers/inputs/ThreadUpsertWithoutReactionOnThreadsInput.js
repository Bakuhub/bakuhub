"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpsertWithoutReactionOnThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadCreateWithoutReactionOnThreadsInput");
const ThreadUpdateWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadUpdateWithoutReactionOnThreadsInput");
let ThreadUpsertWithoutReactionOnThreadsInput = class ThreadUpsertWithoutReactionOnThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutReactionOnThreadsInput_1.ThreadUpdateWithoutReactionOnThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutReactionOnThreadsInput_1.ThreadUpdateWithoutReactionOnThreadsInput)
], ThreadUpsertWithoutReactionOnThreadsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutReactionOnThreadsInput_1.ThreadCreateWithoutReactionOnThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutReactionOnThreadsInput_1.ThreadCreateWithoutReactionOnThreadsInput)
], ThreadUpsertWithoutReactionOnThreadsInput.prototype, "create", void 0);
ThreadUpsertWithoutReactionOnThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpsertWithoutReactionOnThreadsInput", {
        isAbstract: true
    })
], ThreadUpsertWithoutReactionOnThreadsInput);
exports.ThreadUpsertWithoutReactionOnThreadsInput = ThreadUpsertWithoutReactionOnThreadsInput;
