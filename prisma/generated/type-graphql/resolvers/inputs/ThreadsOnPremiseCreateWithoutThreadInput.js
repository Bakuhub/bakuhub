"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCreateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedOneWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseCreateNestedOneWithoutThreadsOnPremiseInput");
let ThreadsOnPremiseCreateWithoutThreadInput = class ThreadsOnPremiseCreateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutThreadsOnPremiseInput_1.PremiseCreateNestedOneWithoutThreadsOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutThreadsOnPremiseInput_1.PremiseCreateNestedOneWithoutThreadsOnPremiseInput)
], ThreadsOnPremiseCreateWithoutThreadInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnPremiseCreateWithoutThreadInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseCreateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCreateWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnPremiseCreateWithoutThreadInput);
exports.ThreadsOnPremiseCreateWithoutThreadInput = ThreadsOnPremiseCreateWithoutThreadInput;
