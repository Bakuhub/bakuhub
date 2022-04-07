"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCreateOrConnectWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionCreateWithoutVisionInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../inputs/ThreadsOnVisionWhereUniqueInput");
let ThreadsOnVisionCreateOrConnectWithoutVisionInput = class ThreadsOnVisionCreateOrConnectWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], ThreadsOnVisionCreateOrConnectWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutVisionInput_1.ThreadsOnVisionCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateWithoutVisionInput_1.ThreadsOnVisionCreateWithoutVisionInput)
], ThreadsOnVisionCreateOrConnectWithoutVisionInput.prototype, "create", void 0);
ThreadsOnVisionCreateOrConnectWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCreateOrConnectWithoutVisionInput", {
        isAbstract: true
    })
], ThreadsOnVisionCreateOrConnectWithoutVisionInput);
exports.ThreadsOnVisionCreateOrConnectWithoutVisionInput = ThreadsOnVisionCreateOrConnectWithoutVisionInput;
