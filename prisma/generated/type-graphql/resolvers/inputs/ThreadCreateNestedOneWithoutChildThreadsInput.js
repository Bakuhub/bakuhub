"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateNestedOneWithoutChildThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutChildThreadsInput_1 = require("../inputs/ThreadCreateOrConnectWithoutChildThreadsInput");
const ThreadCreateWithoutChildThreadsInput_1 = require("../inputs/ThreadCreateWithoutChildThreadsInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateNestedOneWithoutChildThreadsInput = class ThreadCreateNestedOneWithoutChildThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutChildThreadsInput_1.ThreadCreateWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutChildThreadsInput_1.ThreadCreateWithoutChildThreadsInput)
], ThreadCreateNestedOneWithoutChildThreadsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutChildThreadsInput_1.ThreadCreateOrConnectWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutChildThreadsInput_1.ThreadCreateOrConnectWithoutChildThreadsInput)
], ThreadCreateNestedOneWithoutChildThreadsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateNestedOneWithoutChildThreadsInput.prototype, "connect", void 0);
ThreadCreateNestedOneWithoutChildThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateNestedOneWithoutChildThreadsInput", {
        isAbstract: true
    })
], ThreadCreateNestedOneWithoutChildThreadsInput);
exports.ThreadCreateNestedOneWithoutChildThreadsInput = ThreadCreateNestedOneWithoutChildThreadsInput;
