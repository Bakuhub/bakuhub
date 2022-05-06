"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput");
const TimelineCreateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutSubscriptionsOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput = class TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateWithoutSubscriptionsOnTimelinesInput)
], TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput)
], TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput.prototype, "connect", void 0);
TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput);
exports.TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput = TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput;
