"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateWithoutTimelineInput");
const ThreadsOnTimelineUpdateWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineUpdateWithoutTimelineInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../inputs/ThreadsOnTimelineWhereUniqueInput");
let ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput = class ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateWithoutTimelineInput_1.ThreadsOnTimelineUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateWithoutTimelineInput_1.ThreadsOnTimelineUpdateWithoutTimelineInput)
], ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutTimelineInput_1.ThreadsOnTimelineCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateWithoutTimelineInput_1.ThreadsOnTimelineCreateWithoutTimelineInput)
], ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput.prototype, "create", void 0);
ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput);
exports.ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput = ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput;
