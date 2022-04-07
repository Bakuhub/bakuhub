"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineCreateOrConnectWithoutPremisesOnTimelinesInput");
const TimelineCreateWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutPremisesOnTimelinesInput");
const TimelineUpdateWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineUpdateWithoutPremisesOnTimelinesInput");
const TimelineUpsertWithoutPremisesOnTimelinesInput_1 = require("../inputs/TimelineUpsertWithoutPremisesOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput = class TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutPremisesOnTimelinesInput_1.TimelineCreateWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutPremisesOnTimelinesInput_1.TimelineCreateWithoutPremisesOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutPremisesOnTimelinesInput_1.TimelineCreateOrConnectWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutPremisesOnTimelinesInput_1.TimelineCreateOrConnectWithoutPremisesOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpsertWithoutPremisesOnTimelinesInput_1.TimelineUpsertWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpsertWithoutPremisesOnTimelinesInput_1.TimelineUpsertWithoutPremisesOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutPremisesOnTimelinesInput_1.TimelineUpdateWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutPremisesOnTimelinesInput_1.TimelineUpdateWithoutPremisesOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput.prototype, "update", void 0);
TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput);
exports.TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput = TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput;
