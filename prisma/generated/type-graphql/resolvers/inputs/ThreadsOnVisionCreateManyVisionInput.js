"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCreateManyVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnVisionCreateManyVisionInput = class ThreadsOnVisionCreateManyVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionCreateManyVisionInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnVisionCreateManyVisionInput.prototype, "assignedAt", void 0);
ThreadsOnVisionCreateManyVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCreateManyVisionInput", {
        isAbstract: true
    })
], ThreadsOnVisionCreateManyVisionInput);
exports.ThreadsOnVisionCreateManyVisionInput = ThreadsOnVisionCreateManyVisionInput;
