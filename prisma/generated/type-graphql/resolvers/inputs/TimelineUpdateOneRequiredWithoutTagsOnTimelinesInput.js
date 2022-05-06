"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineCreateOrConnectWithoutTagsOnTimelinesInput");
const TimelineCreateWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutTagsOnTimelinesInput");
const TimelineUpdateWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineUpdateWithoutTagsOnTimelinesInput");
const TimelineUpsertWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineUpsertWithoutTagsOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput = class TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutTagsOnTimelinesInput_1.TimelineCreateWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutTagsOnTimelinesInput_1.TimelineCreateWithoutTagsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutTagsOnTimelinesInput_1.TimelineCreateOrConnectWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutTagsOnTimelinesInput_1.TimelineCreateOrConnectWithoutTagsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpsertWithoutTagsOnTimelinesInput_1.TimelineUpsertWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpsertWithoutTagsOnTimelinesInput_1.TimelineUpsertWithoutTagsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutTagsOnTimelinesInput_1.TimelineUpdateWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutTagsOnTimelinesInput_1.TimelineUpdateWithoutTagsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput.prototype, "update", void 0);
TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput);
exports.TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput = TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput;
