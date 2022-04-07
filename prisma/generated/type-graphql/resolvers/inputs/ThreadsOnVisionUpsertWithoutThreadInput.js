"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionUpsertWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionCreateWithoutThreadInput");
const ThreadsOnVisionUpdateWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionUpdateWithoutThreadInput");
let ThreadsOnVisionUpsertWithoutThreadInput = class ThreadsOnVisionUpsertWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateWithoutThreadInput_1.ThreadsOnVisionUpdateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateWithoutThreadInput_1.ThreadsOnVisionUpdateWithoutThreadInput)
], ThreadsOnVisionUpsertWithoutThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutThreadInput_1.ThreadsOnVisionCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateWithoutThreadInput_1.ThreadsOnVisionCreateWithoutThreadInput)
], ThreadsOnVisionUpsertWithoutThreadInput.prototype, "create", void 0);
ThreadsOnVisionUpsertWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionUpsertWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnVisionUpsertWithoutThreadInput);
exports.ThreadsOnVisionUpsertWithoutThreadInput = ThreadsOnVisionUpsertWithoutThreadInput;
