"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateNestedOneWithoutThreadsOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadCreateOrConnectWithoutThreadsOnPremiseInput");
const ThreadCreateWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnPremiseInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateNestedOneWithoutThreadsOnPremiseInput = class ThreadCreateNestedOneWithoutThreadsOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnPremiseInput_1.ThreadCreateWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnPremiseInput_1.ThreadCreateWithoutThreadsOnPremiseInput)
], ThreadCreateNestedOneWithoutThreadsOnPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnPremiseInput_1.ThreadCreateOrConnectWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutThreadsOnPremiseInput_1.ThreadCreateOrConnectWithoutThreadsOnPremiseInput)
], ThreadCreateNestedOneWithoutThreadsOnPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateNestedOneWithoutThreadsOnPremiseInput.prototype, "connect", void 0);
ThreadCreateNestedOneWithoutThreadsOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateNestedOneWithoutThreadsOnPremiseInput", {
        isAbstract: true
    })
], ThreadCreateNestedOneWithoutThreadsOnPremiseInput);
exports.ThreadCreateNestedOneWithoutThreadsOnPremiseInput = ThreadCreateNestedOneWithoutThreadsOnPremiseInput;
