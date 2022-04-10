"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateNestedOneWithoutVotesOnThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutVotesOnThreadInput_1 = require("../inputs/ThreadCreateOrConnectWithoutVotesOnThreadInput");
const ThreadCreateWithoutVotesOnThreadInput_1 = require("../inputs/ThreadCreateWithoutVotesOnThreadInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateNestedOneWithoutVotesOnThreadInput = class ThreadCreateNestedOneWithoutVotesOnThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutVotesOnThreadInput_1.ThreadCreateWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutVotesOnThreadInput_1.ThreadCreateWithoutVotesOnThreadInput)
], ThreadCreateNestedOneWithoutVotesOnThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutVotesOnThreadInput_1.ThreadCreateOrConnectWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutVotesOnThreadInput_1.ThreadCreateOrConnectWithoutVotesOnThreadInput)
], ThreadCreateNestedOneWithoutVotesOnThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateNestedOneWithoutVotesOnThreadInput.prototype, "connect", void 0);
ThreadCreateNestedOneWithoutVotesOnThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateNestedOneWithoutVotesOnThreadInput", {
        isAbstract: true
    })
], ThreadCreateNestedOneWithoutVotesOnThreadInput);
exports.ThreadCreateNestedOneWithoutVotesOnThreadInput = ThreadCreateNestedOneWithoutVotesOnThreadInput;
