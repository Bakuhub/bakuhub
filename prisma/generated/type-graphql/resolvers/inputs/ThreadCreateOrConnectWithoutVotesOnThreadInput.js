"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateOrConnectWithoutVotesOnThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutVotesOnThreadInput_1 = require("../inputs/ThreadCreateWithoutVotesOnThreadInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateOrConnectWithoutVotesOnThreadInput = class ThreadCreateOrConnectWithoutVotesOnThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateOrConnectWithoutVotesOnThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutVotesOnThreadInput_1.ThreadCreateWithoutVotesOnThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutVotesOnThreadInput_1.ThreadCreateWithoutVotesOnThreadInput)
], ThreadCreateOrConnectWithoutVotesOnThreadInput.prototype, "create", void 0);
ThreadCreateOrConnectWithoutVotesOnThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateOrConnectWithoutVotesOnThreadInput", {
        isAbstract: true
    })
], ThreadCreateOrConnectWithoutVotesOnThreadInput);
exports.ThreadCreateOrConnectWithoutVotesOnThreadInput = ThreadCreateOrConnectWithoutVotesOnThreadInput;
