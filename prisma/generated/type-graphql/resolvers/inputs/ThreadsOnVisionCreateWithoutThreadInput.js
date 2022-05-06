"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCreateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateNestedOneWithoutThreadsOnVisionInput_1 = require("../inputs/VisionCreateNestedOneWithoutThreadsOnVisionInput");
let ThreadsOnVisionCreateWithoutThreadInput = class ThreadsOnVisionCreateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutThreadsOnVisionInput_1.VisionCreateNestedOneWithoutThreadsOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutThreadsOnVisionInput_1.VisionCreateNestedOneWithoutThreadsOnVisionInput)
], ThreadsOnVisionCreateWithoutThreadInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnVisionCreateWithoutThreadInput.prototype, "assignedAt", void 0);
ThreadsOnVisionCreateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCreateWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnVisionCreateWithoutThreadInput);
exports.ThreadsOnVisionCreateWithoutThreadInput = ThreadsOnVisionCreateWithoutThreadInput;
