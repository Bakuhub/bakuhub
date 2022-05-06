"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpsertWithoutVotesOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineCreateWithoutVotesOnTimelineInput");
const TimelineUpdateWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineUpdateWithoutVotesOnTimelineInput");
let TimelineUpsertWithoutVotesOnTimelineInput = class TimelineUpsertWithoutVotesOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutVotesOnTimelineInput_1.TimelineUpdateWithoutVotesOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutVotesOnTimelineInput_1.TimelineUpdateWithoutVotesOnTimelineInput)
], TimelineUpsertWithoutVotesOnTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutVotesOnTimelineInput_1.TimelineCreateWithoutVotesOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutVotesOnTimelineInput_1.TimelineCreateWithoutVotesOnTimelineInput)
], TimelineUpsertWithoutVotesOnTimelineInput.prototype, "create", void 0);
TimelineUpsertWithoutVotesOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpsertWithoutVotesOnTimelineInput", {
        isAbstract: true
    })
], TimelineUpsertWithoutVotesOnTimelineInput);
exports.TimelineUpsertWithoutVotesOnTimelineInput = TimelineUpsertWithoutVotesOnTimelineInput;
