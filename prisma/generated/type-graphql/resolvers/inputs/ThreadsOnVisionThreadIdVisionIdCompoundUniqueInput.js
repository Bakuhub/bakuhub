"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput = class ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput.prototype, "visionId", void 0);
ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput", {
        isAbstract: true
    })
], ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput);
exports.ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput = ThreadsOnVisionThreadIdVisionIdCompoundUniqueInput;
