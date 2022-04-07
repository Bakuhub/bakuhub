"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionUpdateOneWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateOrConnectWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionCreateOrConnectWithoutThreadInput");
const ThreadsOnVisionCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionCreateWithoutThreadInput");
const ThreadsOnVisionUpdateWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionUpdateWithoutThreadInput");
const ThreadsOnVisionUpsertWithoutThreadInput_1 = require("../inputs/ThreadsOnVisionUpsertWithoutThreadInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../inputs/ThreadsOnVisionWhereUniqueInput");
let ThreadsOnVisionUpdateOneWithoutThreadInput = class ThreadsOnVisionUpdateOneWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutThreadInput_1.ThreadsOnVisionCreateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateWithoutThreadInput_1.ThreadsOnVisionCreateWithoutThreadInput)
], ThreadsOnVisionUpdateOneWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateOrConnectWithoutThreadInput_1.ThreadsOnVisionCreateOrConnectWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateOrConnectWithoutThreadInput_1.ThreadsOnVisionCreateOrConnectWithoutThreadInput)
], ThreadsOnVisionUpdateOneWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpsertWithoutThreadInput_1.ThreadsOnVisionUpsertWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpsertWithoutThreadInput_1.ThreadsOnVisionUpsertWithoutThreadInput)
], ThreadsOnVisionUpdateOneWithoutThreadInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnVisionUpdateOneWithoutThreadInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnVisionUpdateOneWithoutThreadInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], ThreadsOnVisionUpdateOneWithoutThreadInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateWithoutThreadInput_1.ThreadsOnVisionUpdateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateWithoutThreadInput_1.ThreadsOnVisionUpdateWithoutThreadInput)
], ThreadsOnVisionUpdateOneWithoutThreadInput.prototype, "update", void 0);
ThreadsOnVisionUpdateOneWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionUpdateOneWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnVisionUpdateOneWithoutThreadInput);
exports.ThreadsOnVisionUpdateOneWithoutThreadInput = ThreadsOnVisionUpdateOneWithoutThreadInput;
