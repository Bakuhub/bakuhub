"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateWithoutSubscriptionsOnTimelinesInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput = class TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateWithoutSubscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateWithoutSubscriptionsOnTimelinesInput)
], TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput.prototype, "create", void 0);
TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput);
exports.TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput = TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput;
