"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionUpdateWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionUpdateWithoutVisionInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../inputs/ThreadsOnVisionWhereUniqueInput");
let ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput = class ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput)
], ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateWithoutVisionInput_1.ThreadsOnVisionUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateWithoutVisionInput_1.ThreadsOnVisionUpdateWithoutVisionInput)
], ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput.prototype, "data", void 0);
ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput", {
        isAbstract: true
    })
], ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput);
exports.ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput = ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput;
