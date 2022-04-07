"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateOneWithoutChildThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutChildThreadsInput_1 = require("../inputs/ThreadCreateOrConnectWithoutChildThreadsInput");
const ThreadCreateWithoutChildThreadsInput_1 = require("../inputs/ThreadCreateWithoutChildThreadsInput");
const ThreadUpdateWithoutChildThreadsInput_1 = require("../inputs/ThreadUpdateWithoutChildThreadsInput");
const ThreadUpsertWithoutChildThreadsInput_1 = require("../inputs/ThreadUpsertWithoutChildThreadsInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateOneWithoutChildThreadsInput = class ThreadUpdateOneWithoutChildThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutChildThreadsInput_1.ThreadCreateWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutChildThreadsInput_1.ThreadCreateWithoutChildThreadsInput)
], ThreadUpdateOneWithoutChildThreadsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutChildThreadsInput_1.ThreadCreateOrConnectWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutChildThreadsInput_1.ThreadCreateOrConnectWithoutChildThreadsInput)
], ThreadUpdateOneWithoutChildThreadsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpsertWithoutChildThreadsInput_1.ThreadUpsertWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpsertWithoutChildThreadsInput_1.ThreadUpsertWithoutChildThreadsInput)
], ThreadUpdateOneWithoutChildThreadsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadUpdateOneWithoutChildThreadsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadUpdateOneWithoutChildThreadsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpdateOneWithoutChildThreadsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutChildThreadsInput_1.ThreadUpdateWithoutChildThreadsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutChildThreadsInput_1.ThreadUpdateWithoutChildThreadsInput)
], ThreadUpdateOneWithoutChildThreadsInput.prototype, "update", void 0);
ThreadUpdateOneWithoutChildThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateOneWithoutChildThreadsInput", {
        isAbstract: true
    })
], ThreadUpdateOneWithoutChildThreadsInput);
exports.ThreadUpdateOneWithoutChildThreadsInput = ThreadUpdateOneWithoutChildThreadsInput;
