"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCreateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateNestedOneWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadCreateNestedOneWithoutThreadsOnPremiseInput");
let ThreadsOnPremiseCreateWithoutPremiseInput = class ThreadsOnPremiseCreateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnPremiseInput_1.ThreadCreateNestedOneWithoutThreadsOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutThreadsOnPremiseInput_1.ThreadCreateNestedOneWithoutThreadsOnPremiseInput)
], ThreadsOnPremiseCreateWithoutPremiseInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnPremiseCreateWithoutPremiseInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseCreateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCreateWithoutPremiseInput", {
        isAbstract: true
    })
], ThreadsOnPremiseCreateWithoutPremiseInput);
exports.ThreadsOnPremiseCreateWithoutPremiseInput = ThreadsOnPremiseCreateWithoutPremiseInput;
