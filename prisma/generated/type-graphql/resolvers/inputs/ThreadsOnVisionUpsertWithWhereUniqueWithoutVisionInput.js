"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionCreateWithoutVisionInput");
const ThreadsOnVisionUpdateWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionUpdateWithoutVisionInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../inputs/ThreadsOnVisionWhereUniqueInput");
let ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput = class ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateWithoutVisionInput_1.ThreadsOnVisionUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateWithoutVisionInput_1.ThreadsOnVisionUpdateWithoutVisionInput)
], ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutVisionInput_1.ThreadsOnVisionCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateWithoutVisionInput_1.ThreadsOnVisionCreateWithoutVisionInput)
], ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput.prototype, "create", void 0);
ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput", {
        isAbstract: true
    })
], ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput);
exports.ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput = ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput;
