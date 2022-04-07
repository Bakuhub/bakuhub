"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineUpdateWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineUpdateWithoutTimelineInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../inputs/ThreadsOnTimelineWhereUniqueInput");
let ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput = class ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateWithoutTimelineInput_1.ThreadsOnTimelineUpdateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateWithoutTimelineInput_1.ThreadsOnTimelineUpdateWithoutTimelineInput)
], ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput.prototype, "data", void 0);
ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput", {
        isAbstract: true
    })
], ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput);
exports.ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput = ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput;
