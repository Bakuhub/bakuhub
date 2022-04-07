"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCreateOrConnectWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseCreateWithoutThreadInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../inputs/ThreadsOnPremiseWhereUniqueInput");
let ThreadsOnPremiseCreateOrConnectWithoutThreadInput = class ThreadsOnPremiseCreateOrConnectWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], ThreadsOnPremiseCreateOrConnectWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutThreadInput_1.ThreadsOnPremiseCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateWithoutThreadInput_1.ThreadsOnPremiseCreateWithoutThreadInput)
], ThreadsOnPremiseCreateOrConnectWithoutThreadInput.prototype, "create", void 0);
ThreadsOnPremiseCreateOrConnectWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCreateOrConnectWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnPremiseCreateOrConnectWithoutThreadInput);
exports.ThreadsOnPremiseCreateOrConnectWithoutThreadInput = ThreadsOnPremiseCreateOrConnectWithoutThreadInput;
