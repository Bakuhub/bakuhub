"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpsertWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutTagsOnTimelinesInput");
const TimelineUpdateWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineUpdateWithoutTagsOnTimelinesInput");
let TimelineUpsertWithoutTagsOnTimelinesInput = class TimelineUpsertWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutTagsOnTimelinesInput_1.TimelineUpdateWithoutTagsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutTagsOnTimelinesInput_1.TimelineUpdateWithoutTagsOnTimelinesInput)
], TimelineUpsertWithoutTagsOnTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutTagsOnTimelinesInput_1.TimelineCreateWithoutTagsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutTagsOnTimelinesInput_1.TimelineCreateWithoutTagsOnTimelinesInput)
], TimelineUpsertWithoutTagsOnTimelinesInput.prototype, "create", void 0);
TimelineUpsertWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpsertWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpsertWithoutTagsOnTimelinesInput);
exports.TimelineUpsertWithoutTagsOnTimelinesInput = TimelineUpsertWithoutTagsOnTimelinesInput;
