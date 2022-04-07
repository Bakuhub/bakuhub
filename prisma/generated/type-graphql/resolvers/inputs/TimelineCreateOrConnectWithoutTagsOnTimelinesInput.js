"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateOrConnectWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutTagsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutTagsOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateOrConnectWithoutTagsOnTimelinesInput = class TimelineCreateOrConnectWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateOrConnectWithoutTagsOnTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutTagsOnTimelinesInput_1.TimelineCreateWithoutTagsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutTagsOnTimelinesInput_1.TimelineCreateWithoutTagsOnTimelinesInput)
], TimelineCreateOrConnectWithoutTagsOnTimelinesInput.prototype, "create", void 0);
TimelineCreateOrConnectWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateOrConnectWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateOrConnectWithoutTagsOnTimelinesInput);
exports.TimelineCreateOrConnectWithoutTagsOnTimelinesInput = TimelineCreateOrConnectWithoutTagsOnTimelinesInput;
