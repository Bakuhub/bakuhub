"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpsertWithoutSupscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutSupscriptionsOnTimelinesInput");
const TimelineUpdateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineUpdateWithoutSupscriptionsOnTimelinesInput");
let TimelineUpsertWithoutSupscriptionsOnTimelinesInput = class TimelineUpsertWithoutSupscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutSupscriptionsOnTimelinesInput_1.TimelineUpdateWithoutSupscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutSupscriptionsOnTimelinesInput_1.TimelineUpdateWithoutSupscriptionsOnTimelinesInput)
], TimelineUpsertWithoutSupscriptionsOnTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateWithoutSupscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateWithoutSupscriptionsOnTimelinesInput)
], TimelineUpsertWithoutSupscriptionsOnTimelinesInput.prototype, "create", void 0);
TimelineUpsertWithoutSupscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpsertWithoutSupscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpsertWithoutSupscriptionsOnTimelinesInput);
exports.TimelineUpsertWithoutSupscriptionsOnTimelinesInput = TimelineUpsertWithoutSupscriptionsOnTimelinesInput;
