"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput");
const TimelineCreateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutSupscriptionsOnTimelinesInput");
const TimelineUpdateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineUpdateWithoutSupscriptionsOnTimelinesInput");
const TimelineUpsertWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineUpsertWithoutSupscriptionsOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput = class TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateWithoutSupscriptionsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpsertWithoutSupscriptionsOnTimelinesInput_1.TimelineUpsertWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpsertWithoutSupscriptionsOnTimelinesInput_1.TimelineUpsertWithoutSupscriptionsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutSupscriptionsOnTimelinesInput_1.TimelineUpdateWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutSupscriptionsOnTimelinesInput_1.TimelineUpdateWithoutSupscriptionsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput.prototype, "update", void 0);
TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput);
exports.TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput = TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput;
