"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput");
const TimelineCreateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutSubscriptionsOnTimelinesInput");
const TimelineUpdateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineUpdateWithoutSubscriptionsOnTimelinesInput");
const TimelineUpsertWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineUpsertWithoutSubscriptionsOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput = class TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateWithoutSubscriptionsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpsertWithoutSubscriptionsOnTimelinesInput_1.TimelineUpsertWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpsertWithoutSubscriptionsOnTimelinesInput_1.TimelineUpsertWithoutSubscriptionsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutSubscriptionsOnTimelinesInput_1.TimelineUpdateWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutSubscriptionsOnTimelinesInput_1.TimelineUpdateWithoutSubscriptionsOnTimelinesInput)
], TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput.prototype, "update", void 0);
TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput);
exports.TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput = TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput;
