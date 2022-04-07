"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineUpsertWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineCreateWithoutThreadInput");
const ThreadsOnTimelineUpdateWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineUpdateWithoutThreadInput");
let ThreadsOnTimelineUpsertWithoutThreadInput = class ThreadsOnTimelineUpsertWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateWithoutThreadInput_1.ThreadsOnTimelineUpdateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateWithoutThreadInput_1.ThreadsOnTimelineUpdateWithoutThreadInput)
], ThreadsOnTimelineUpsertWithoutThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutThreadInput_1.ThreadsOnTimelineCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateWithoutThreadInput_1.ThreadsOnTimelineCreateWithoutThreadInput)
], ThreadsOnTimelineUpsertWithoutThreadInput.prototype, "create", void 0);
ThreadsOnTimelineUpsertWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineUpsertWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnTimelineUpsertWithoutThreadInput);
exports.ThreadsOnTimelineUpsertWithoutThreadInput = ThreadsOnTimelineUpsertWithoutThreadInput;
