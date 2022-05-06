"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateOrConnectWithoutChildThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutChildThreadsInput_1 = require("../inputs/ThreadCreateWithoutChildThreadsInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateOrConnectWithoutChildThreadsInput = class ThreadCreateOrConnectWithoutChildThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateOrConnectWithoutChildThreadsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutChildThreadsInput_1.ThreadCreateWithoutChildThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutChildThreadsInput_1.ThreadCreateWithoutChildThreadsInput)
], ThreadCreateOrConnectWithoutChildThreadsInput.prototype, "create", void 0);
ThreadCreateOrConnectWithoutChildThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateOrConnectWithoutChildThreadsInput", {
        isAbstract: true
    })
], ThreadCreateOrConnectWithoutChildThreadsInput);
exports.ThreadCreateOrConnectWithoutChildThreadsInput = ThreadCreateOrConnectWithoutChildThreadsInput;
