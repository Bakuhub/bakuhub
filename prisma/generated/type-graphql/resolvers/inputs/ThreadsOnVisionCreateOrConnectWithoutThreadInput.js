"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCreateOrConnectWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionCreateWithoutThreadInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../inputs/ThreadsOnVisionWhereUniqueInput");
let ThreadsOnVisionCreateOrConnectWithoutThreadInput = class ThreadsOnVisionCreateOrConnectWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], ThreadsOnVisionCreateOrConnectWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutThreadInput_1.ThreadsOnVisionCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateWithoutThreadInput_1.ThreadsOnVisionCreateWithoutThreadInput)
], ThreadsOnVisionCreateOrConnectWithoutThreadInput.prototype, "create", void 0);
ThreadsOnVisionCreateOrConnectWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCreateOrConnectWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnVisionCreateOrConnectWithoutThreadInput);
exports.ThreadsOnVisionCreateOrConnectWithoutThreadInput = ThreadsOnVisionCreateOrConnectWithoutThreadInput;
