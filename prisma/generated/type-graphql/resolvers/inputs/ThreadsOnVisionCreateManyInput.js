"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnVisionCreateManyInput = class ThreadsOnVisionCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionCreateManyInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionCreateManyInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnVisionCreateManyInput.prototype, "assignedAt", void 0);
ThreadsOnVisionCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCreateManyInput", {
        isAbstract: true
    })
], ThreadsOnVisionCreateManyInput);
exports.ThreadsOnVisionCreateManyInput = ThreadsOnVisionCreateManyInput;