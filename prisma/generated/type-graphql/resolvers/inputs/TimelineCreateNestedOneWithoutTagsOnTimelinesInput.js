"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateNestedOneWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineCreateOrConnectWithoutTagsOnTimelinesInput");
const TimelineCreateWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutTagsOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateNestedOneWithoutTagsOnTimelinesInput = class TimelineCreateNestedOneWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutTagsOnTimelinesInput_1.TimelineCreateWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutTagsOnTimelinesInput_1.TimelineCreateWithoutTagsOnTimelinesInput)
], TimelineCreateNestedOneWithoutTagsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutTagsOnTimelinesInput_1.TimelineCreateOrConnectWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutTagsOnTimelinesInput_1.TimelineCreateOrConnectWithoutTagsOnTimelinesInput)
], TimelineCreateNestedOneWithoutTagsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateNestedOneWithoutTagsOnTimelinesInput.prototype, "connect", void 0);
TimelineCreateNestedOneWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateNestedOneWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateNestedOneWithoutTagsOnTimelinesInput);
exports.TimelineCreateNestedOneWithoutTagsOnTimelinesInput = TimelineCreateNestedOneWithoutTagsOnTimelinesInput;
