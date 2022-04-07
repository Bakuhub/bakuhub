"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCreateNestedOneWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateOrConnectWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseCreateOrConnectWithoutThreadInput");
const ThreadsOnPremiseCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseCreateWithoutThreadInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../inputs/ThreadsOnPremiseWhereUniqueInput");
let ThreadsOnPremiseCreateNestedOneWithoutThreadInput = class ThreadsOnPremiseCreateNestedOneWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutThreadInput_1.ThreadsOnPremiseCreateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateWithoutThreadInput_1.ThreadsOnPremiseCreateWithoutThreadInput)
], ThreadsOnPremiseCreateNestedOneWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateOrConnectWithoutThreadInput_1.ThreadsOnPremiseCreateOrConnectWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateOrConnectWithoutThreadInput_1.ThreadsOnPremiseCreateOrConnectWithoutThreadInput)
], ThreadsOnPremiseCreateNestedOneWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], ThreadsOnPremiseCreateNestedOneWithoutThreadInput.prototype, "connect", void 0);
ThreadsOnPremiseCreateNestedOneWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCreateNestedOneWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnPremiseCreateNestedOneWithoutThreadInput);
exports.ThreadsOnPremiseCreateNestedOneWithoutThreadInput = ThreadsOnPremiseCreateNestedOneWithoutThreadInput;
