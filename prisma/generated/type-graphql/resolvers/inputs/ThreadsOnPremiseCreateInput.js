"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedOneWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseCreateNestedOneWithoutThreadsOnPremiseInput");
const ThreadCreateNestedOneWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadCreateNestedOneWithoutThreadsOnPremiseInput");
let ThreadsOnPremiseCreateInput = class ThreadsOnPremiseCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnPremiseInput_1.ThreadCreateNestedOneWithoutThreadsOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutThreadsOnPremiseInput_1.ThreadCreateNestedOneWithoutThreadsOnPremiseInput)
], ThreadsOnPremiseCreateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutThreadsOnPremiseInput_1.PremiseCreateNestedOneWithoutThreadsOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutThreadsOnPremiseInput_1.PremiseCreateNestedOneWithoutThreadsOnPremiseInput)
], ThreadsOnPremiseCreateInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnPremiseCreateInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCreateInput", {
        isAbstract: true
    })
], ThreadsOnPremiseCreateInput);
exports.ThreadsOnPremiseCreateInput = ThreadsOnPremiseCreateInput;
