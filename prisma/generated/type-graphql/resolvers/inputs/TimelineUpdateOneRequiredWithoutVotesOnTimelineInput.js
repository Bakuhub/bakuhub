"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateOneRequiredWithoutVotesOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineCreateOrConnectWithoutVotesOnTimelineInput");
const TimelineCreateWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineCreateWithoutVotesOnTimelineInput");
const TimelineUpdateWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineUpdateWithoutVotesOnTimelineInput");
const TimelineUpsertWithoutVotesOnTimelineInput_1 = require("../inputs/TimelineUpsertWithoutVotesOnTimelineInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineUpdateOneRequiredWithoutVotesOnTimelineInput = class TimelineUpdateOneRequiredWithoutVotesOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutVotesOnTimelineInput_1.TimelineCreateWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutVotesOnTimelineInput_1.TimelineCreateWithoutVotesOnTimelineInput)
], TimelineUpdateOneRequiredWithoutVotesOnTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutVotesOnTimelineInput_1.TimelineCreateOrConnectWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutVotesOnTimelineInput_1.TimelineCreateOrConnectWithoutVotesOnTimelineInput)
], TimelineUpdateOneRequiredWithoutVotesOnTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpsertWithoutVotesOnTimelineInput_1.TimelineUpsertWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpsertWithoutVotesOnTimelineInput_1.TimelineUpsertWithoutVotesOnTimelineInput)
], TimelineUpdateOneRequiredWithoutVotesOnTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineUpdateOneRequiredWithoutVotesOnTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutVotesOnTimelineInput_1.TimelineUpdateWithoutVotesOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutVotesOnTimelineInput_1.TimelineUpdateWithoutVotesOnTimelineInput)
], TimelineUpdateOneRequiredWithoutVotesOnTimelineInput.prototype, "update", void 0);
TimelineUpdateOneRequiredWithoutVotesOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutVotesOnTimelineInput", {
        isAbstract: true
    })
], TimelineUpdateOneRequiredWithoutVotesOnTimelineInput);
exports.TimelineUpdateOneRequiredWithoutVotesOnTimelineInput = TimelineUpdateOneRequiredWithoutVotesOnTimelineInput;
