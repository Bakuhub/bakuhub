"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCreateNestedOneWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateOrConnectWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionCreateOrConnectWithoutThreadInput");
const ThreadsOnVisionCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionCreateWithoutThreadInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../inputs/ThreadsOnVisionWhereUniqueInput");
let ThreadsOnVisionCreateNestedOneWithoutThreadInput = class ThreadsOnVisionCreateNestedOneWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutThreadInput_1.ThreadsOnVisionCreateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateWithoutThreadInput_1.ThreadsOnVisionCreateWithoutThreadInput)
], ThreadsOnVisionCreateNestedOneWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateOrConnectWithoutThreadInput_1.ThreadsOnVisionCreateOrConnectWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateOrConnectWithoutThreadInput_1.ThreadsOnVisionCreateOrConnectWithoutThreadInput)
], ThreadsOnVisionCreateNestedOneWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], ThreadsOnVisionCreateNestedOneWithoutThreadInput.prototype, "connect", void 0);
ThreadsOnVisionCreateNestedOneWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCreateNestedOneWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnVisionCreateNestedOneWithoutThreadInput);
exports.ThreadsOnVisionCreateNestedOneWithoutThreadInput = ThreadsOnVisionCreateNestedOneWithoutThreadInput;
