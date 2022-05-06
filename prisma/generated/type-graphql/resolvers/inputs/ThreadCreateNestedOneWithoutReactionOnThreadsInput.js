"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateNestedOneWithoutReactionOnThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadCreateOrConnectWithoutReactionOnThreadsInput");
const ThreadCreateWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadCreateWithoutReactionOnThreadsInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateNestedOneWithoutReactionOnThreadsInput = class ThreadCreateNestedOneWithoutReactionOnThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutReactionOnThreadsInput_1.ThreadCreateWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutReactionOnThreadsInput_1.ThreadCreateWithoutReactionOnThreadsInput)
], ThreadCreateNestedOneWithoutReactionOnThreadsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutReactionOnThreadsInput_1.ThreadCreateOrConnectWithoutReactionOnThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutReactionOnThreadsInput_1.ThreadCreateOrConnectWithoutReactionOnThreadsInput)
], ThreadCreateNestedOneWithoutReactionOnThreadsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateNestedOneWithoutReactionOnThreadsInput.prototype, "connect", void 0);
ThreadCreateNestedOneWithoutReactionOnThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateNestedOneWithoutReactionOnThreadsInput", {
        isAbstract: true
    })
], ThreadCreateNestedOneWithoutReactionOnThreadsInput);
exports.ThreadCreateNestedOneWithoutReactionOnThreadsInput = ThreadCreateNestedOneWithoutReactionOnThreadsInput;
