"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateOrConnectWithoutParentThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutParentThreadInput_1 = require("../inputs/ThreadCreateWithoutParentThreadInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateOrConnectWithoutParentThreadInput = class ThreadCreateOrConnectWithoutParentThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateOrConnectWithoutParentThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutParentThreadInput_1.ThreadCreateWithoutParentThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutParentThreadInput_1.ThreadCreateWithoutParentThreadInput)
], ThreadCreateOrConnectWithoutParentThreadInput.prototype, "create", void 0);
ThreadCreateOrConnectWithoutParentThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateOrConnectWithoutParentThreadInput", {
        isAbstract: true
    })
], ThreadCreateOrConnectWithoutParentThreadInput);
exports.ThreadCreateOrConnectWithoutParentThreadInput = ThreadCreateOrConnectWithoutParentThreadInput;
