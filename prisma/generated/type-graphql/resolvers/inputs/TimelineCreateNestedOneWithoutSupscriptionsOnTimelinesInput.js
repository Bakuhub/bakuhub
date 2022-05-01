"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput");
const TimelineCreateWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutSupscriptionsOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput = class TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateWithoutSupscriptionsOnTimelinesInput)
], TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateOrConnectWithoutSupscriptionsOnTimelinesInput)
], TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput.prototype, "connect", void 0);
TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput);
exports.TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput = TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput;
