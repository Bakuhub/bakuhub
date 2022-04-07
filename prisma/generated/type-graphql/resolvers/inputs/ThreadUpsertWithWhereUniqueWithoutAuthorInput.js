"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutAuthorInput_1 = require("../inputs/ThreadCreateWithoutAuthorInput");
const ThreadUpdateWithoutAuthorInput_1 = require("../inputs/ThreadUpdateWithoutAuthorInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpsertWithWhereUniqueWithoutAuthorInput = class ThreadUpsertWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutAuthorInput_1.ThreadUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutAuthorInput_1.ThreadUpdateWithoutAuthorInput)
], ThreadUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutAuthorInput_1.ThreadCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutAuthorInput_1.ThreadCreateWithoutAuthorInput)
], ThreadUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
ThreadUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpsertWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], ThreadUpsertWithWhereUniqueWithoutAuthorInput);
exports.ThreadUpsertWithWhereUniqueWithoutAuthorInput = ThreadUpsertWithWhereUniqueWithoutAuthorInput;
