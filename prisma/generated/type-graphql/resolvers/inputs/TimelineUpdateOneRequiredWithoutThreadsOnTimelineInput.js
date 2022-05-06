"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineCreateOrConnectWithoutThreadsOnTimelineInput");
const TimelineCreateWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineCreateWithoutThreadsOnTimelineInput");
const TimelineUpdateWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineUpdateWithoutThreadsOnTimelineInput");
const TimelineUpsertWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineUpsertWithoutThreadsOnTimelineInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput = class TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutThreadsOnTimelineInput_1.TimelineCreateWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutThreadsOnTimelineInput_1.TimelineCreateWithoutThreadsOnTimelineInput)
], TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutThreadsOnTimelineInput_1.TimelineCreateOrConnectWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutThreadsOnTimelineInput_1.TimelineCreateOrConnectWithoutThreadsOnTimelineInput)
], TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpsertWithoutThreadsOnTimelineInput_1.TimelineUpsertWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpsertWithoutThreadsOnTimelineInput_1.TimelineUpsertWithoutThreadsOnTimelineInput)
], TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutThreadsOnTimelineInput_1.TimelineUpdateWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutThreadsOnTimelineInput_1.TimelineUpdateWithoutThreadsOnTimelineInput)
], TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput.prototype, "update", void 0);
TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput", {
        isAbstract: true
    })
], TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput);
exports.TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput = TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput;
