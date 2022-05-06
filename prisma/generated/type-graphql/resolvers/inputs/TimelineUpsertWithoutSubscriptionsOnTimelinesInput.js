"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpsertWithoutSubscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutSubscriptionsOnTimelinesInput");
const TimelineUpdateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineUpdateWithoutSubscriptionsOnTimelinesInput");
let TimelineUpsertWithoutSubscriptionsOnTimelinesInput = class TimelineUpsertWithoutSubscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutSubscriptionsOnTimelinesInput_1.TimelineUpdateWithoutSubscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutSubscriptionsOnTimelinesInput_1.TimelineUpdateWithoutSubscriptionsOnTimelinesInput)
], TimelineUpsertWithoutSubscriptionsOnTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateWithoutSubscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateWithoutSubscriptionsOnTimelinesInput)
], TimelineUpsertWithoutSubscriptionsOnTimelinesInput.prototype, "create", void 0);
TimelineUpsertWithoutSubscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpsertWithoutSubscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpsertWithoutSubscriptionsOnTimelinesInput);
exports.TimelineUpsertWithoutSubscriptionsOnTimelinesInput = TimelineUpsertWithoutSubscriptionsOnTimelinesInput;
