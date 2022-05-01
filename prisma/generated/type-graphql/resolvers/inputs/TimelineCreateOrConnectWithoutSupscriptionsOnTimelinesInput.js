"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutSupscriptionsOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput = class TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateWithoutSupscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateWithoutSupscriptionsOnTimelinesInput)
], TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput.prototype, "create", void 0);
TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput);
exports.TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput = TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput;
