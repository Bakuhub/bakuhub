"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateNestedOneWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadCreateNestedOneWithoutThreadsOnVisionInput");
const VisionCreateNestedOneWithoutThreadsOnVisionInput_1 = require("../inputs/VisionCreateNestedOneWithoutThreadsOnVisionInput");
let ThreadsOnVisionCreateInput = class ThreadsOnVisionCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnVisionInput_1.ThreadCreateNestedOneWithoutThreadsOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutThreadsOnVisionInput_1.ThreadCreateNestedOneWithoutThreadsOnVisionInput)
], ThreadsOnVisionCreateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutThreadsOnVisionInput_1.VisionCreateNestedOneWithoutThreadsOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutThreadsOnVisionInput_1.VisionCreateNestedOneWithoutThreadsOnVisionInput)
], ThreadsOnVisionCreateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnVisionCreateInput.prototype, "assignedAt", void 0);
ThreadsOnVisionCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCreateInput", {
        isAbstract: true
    })
], ThreadsOnVisionCreateInput);
exports.ThreadsOnVisionCreateInput = ThreadsOnVisionCreateInput;
