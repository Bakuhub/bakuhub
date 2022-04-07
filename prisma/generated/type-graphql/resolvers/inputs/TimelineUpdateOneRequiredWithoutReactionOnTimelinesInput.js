"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineCreateOrConnectWithoutReactionOnTimelinesInput");
const TimelineCreateWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutReactionOnTimelinesInput");
const TimelineUpdateWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineUpdateWithoutReactionOnTimelinesInput");
const TimelineUpsertWithoutReactionOnTimelinesInput_1 = require("../inputs/TimelineUpsertWithoutReactionOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput = class TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutReactionOnTimelinesInput_1.TimelineCreateWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutReactionOnTimelinesInput_1.TimelineCreateWithoutReactionOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutReactionOnTimelinesInput_1.TimelineCreateOrConnectWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutReactionOnTimelinesInput_1.TimelineCreateOrConnectWithoutReactionOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpsertWithoutReactionOnTimelinesInput_1.TimelineUpsertWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpsertWithoutReactionOnTimelinesInput_1.TimelineUpsertWithoutReactionOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutReactionOnTimelinesInput_1.TimelineUpdateWithoutReactionOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutReactionOnTimelinesInput_1.TimelineUpdateWithoutReactionOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput.prototype, "update", void 0);
TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput);
exports.TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput = TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput;
