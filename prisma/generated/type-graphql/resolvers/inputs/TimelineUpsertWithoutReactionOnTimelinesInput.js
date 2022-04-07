"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpsertWithoutReactionOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutReactionOnTimelinesInput");
const TimelineUpdateWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineUpdateWithoutReactionOnTimelinesInput");
let TimelineUpsertWithoutReactionOnTimelinesInput = class TimelineUpsertWithoutReactionOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutReactionOnTimelinesInput_1.TimelineUpdateWithoutReactionOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutReactionOnTimelinesInput_1.TimelineUpdateWithoutReactionOnTimelinesInput)
], TimelineUpsertWithoutReactionOnTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutReactionOnTimelinesInput_1.TimelineCreateWithoutReactionOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutReactionOnTimelinesInput_1.TimelineCreateWithoutReactionOnTimelinesInput)
], TimelineUpsertWithoutReactionOnTimelinesInput.prototype, "create", void 0);
TimelineUpsertWithoutReactionOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpsertWithoutReactionOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpsertWithoutReactionOnTimelinesInput);
exports.TimelineUpsertWithoutReactionOnTimelinesInput = TimelineUpsertWithoutReactionOnTimelinesInput;
