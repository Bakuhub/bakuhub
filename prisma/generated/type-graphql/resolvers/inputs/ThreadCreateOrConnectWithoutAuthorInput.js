"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutAuthorInput_1 = require("../inputs/ThreadCreateWithoutAuthorInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateOrConnectWithoutAuthorInput = class ThreadCreateOrConnectWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutAuthorInput_1.ThreadCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutAuthorInput_1.ThreadCreateWithoutAuthorInput)
], ThreadCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
ThreadCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateOrConnectWithoutAuthorInput", {
        isAbstract: true
    })
], ThreadCreateOrConnectWithoutAuthorInput);
exports.ThreadCreateOrConnectWithoutAuthorInput = ThreadCreateOrConnectWithoutAuthorInput;
