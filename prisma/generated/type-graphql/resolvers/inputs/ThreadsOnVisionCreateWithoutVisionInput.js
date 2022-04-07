"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCreateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateNestedOneWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadCreateNestedOneWithoutThreadsOnVisionInput");
let ThreadsOnVisionCreateWithoutVisionInput = class ThreadsOnVisionCreateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnVisionInput_1.ThreadCreateNestedOneWithoutThreadsOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutThreadsOnVisionInput_1.ThreadCreateNestedOneWithoutThreadsOnVisionInput)
], ThreadsOnVisionCreateWithoutVisionInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnVisionCreateWithoutVisionInput.prototype, "assignedAt", void 0);
ThreadsOnVisionCreateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCreateWithoutVisionInput", {
        isAbstract: true
    })
], ThreadsOnVisionCreateWithoutVisionInput);
exports.ThreadsOnVisionCreateWithoutVisionInput = ThreadsOnVisionCreateWithoutVisionInput;
