"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpsertWithoutChildThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutChildThreadsInput_1 = require("../inputs/ThreadCreateWithoutChildThreadsInput");
const ThreadUpdateWithoutChildThreadsInput_1 = require("../inputs/ThreadUpdateWithoutChildThreadsInput");
let ThreadUpsertWithoutChildThreadsInput = class ThreadUpsertWithoutChildThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutChildThreadsInput_1.ThreadUpdateWithoutChildThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutChildThreadsInput_1.ThreadUpdateWithoutChildThreadsInput)
], ThreadUpsertWithoutChildThreadsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutChildThreadsInput_1.ThreadCreateWithoutChildThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutChildThreadsInput_1.ThreadCreateWithoutChildThreadsInput)
], ThreadUpsertWithoutChildThreadsInput.prototype, "create", void 0);
ThreadUpsertWithoutChildThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpsertWithoutChildThreadsInput", {
        isAbstract: true
    })
], ThreadUpsertWithoutChildThreadsInput);
exports.ThreadUpsertWithoutChildThreadsInput = ThreadUpsertWithoutChildThreadsInput;
