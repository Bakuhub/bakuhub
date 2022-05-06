"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateOrConnectWithoutThreadsOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnPremiseInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateOrConnectWithoutThreadsOnPremiseInput = class ThreadCreateOrConnectWithoutThreadsOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateOrConnectWithoutThreadsOnPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnPremiseInput_1.ThreadCreateWithoutThreadsOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnPremiseInput_1.ThreadCreateWithoutThreadsOnPremiseInput)
], ThreadCreateOrConnectWithoutThreadsOnPremiseInput.prototype, "create", void 0);
ThreadCreateOrConnectWithoutThreadsOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateOrConnectWithoutThreadsOnPremiseInput", {
        isAbstract: true
    })
], ThreadCreateOrConnectWithoutThreadsOnPremiseInput);
exports.ThreadCreateOrConnectWithoutThreadsOnPremiseInput = ThreadCreateOrConnectWithoutThreadsOnPremiseInput;
