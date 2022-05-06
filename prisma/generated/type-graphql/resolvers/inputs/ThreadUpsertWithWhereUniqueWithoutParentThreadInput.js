"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpsertWithWhereUniqueWithoutParentThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutParentThreadInput_1 = require("../inputs/ThreadCreateWithoutParentThreadInput");
const ThreadUpdateWithoutParentThreadInput_1 = require("../inputs/ThreadUpdateWithoutParentThreadInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpsertWithWhereUniqueWithoutParentThreadInput = class ThreadUpsertWithWhereUniqueWithoutParentThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpsertWithWhereUniqueWithoutParentThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutParentThreadInput_1.ThreadUpdateWithoutParentThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutParentThreadInput_1.ThreadUpdateWithoutParentThreadInput)
], ThreadUpsertWithWhereUniqueWithoutParentThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutParentThreadInput_1.ThreadCreateWithoutParentThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutParentThreadInput_1.ThreadCreateWithoutParentThreadInput)
], ThreadUpsertWithWhereUniqueWithoutParentThreadInput.prototype, "create", void 0);
ThreadUpsertWithWhereUniqueWithoutParentThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpsertWithWhereUniqueWithoutParentThreadInput", {
        isAbstract: true
    })
], ThreadUpsertWithWhereUniqueWithoutParentThreadInput);
exports.ThreadUpsertWithWhereUniqueWithoutParentThreadInput = ThreadUpsertWithWhereUniqueWithoutParentThreadInput;
