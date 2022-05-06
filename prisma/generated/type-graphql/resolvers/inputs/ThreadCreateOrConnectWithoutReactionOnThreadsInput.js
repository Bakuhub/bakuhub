"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateOrConnectWithoutReactionOnThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutReactionOnThreadsInput_1 = require("../inputs/ThreadCreateWithoutReactionOnThreadsInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateOrConnectWithoutReactionOnThreadsInput = class ThreadCreateOrConnectWithoutReactionOnThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateOrConnectWithoutReactionOnThreadsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutReactionOnThreadsInput_1.ThreadCreateWithoutReactionOnThreadsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutReactionOnThreadsInput_1.ThreadCreateWithoutReactionOnThreadsInput)
], ThreadCreateOrConnectWithoutReactionOnThreadsInput.prototype, "create", void 0);
ThreadCreateOrConnectWithoutReactionOnThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateOrConnectWithoutReactionOnThreadsInput", {
        isAbstract: true
    })
], ThreadCreateOrConnectWithoutReactionOnThreadsInput);
exports.ThreadCreateOrConnectWithoutReactionOnThreadsInput = ThreadCreateOrConnectWithoutReactionOnThreadsInput;
