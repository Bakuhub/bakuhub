"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput_1 = require("../inputs/ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput");
let ThreadsOnVisionWhereUniqueInput = class ThreadsOnVisionWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionWhereUniqueInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput_1.ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput_1.ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput)
], ThreadsOnVisionWhereUniqueInput.prototype, "threadId_visionId", void 0);
ThreadsOnVisionWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionWhereUniqueInput", {
        isAbstract: true
    })
], ThreadsOnVisionWhereUniqueInput);
exports.ThreadsOnVisionWhereUniqueInput = ThreadsOnVisionWhereUniqueInput;
