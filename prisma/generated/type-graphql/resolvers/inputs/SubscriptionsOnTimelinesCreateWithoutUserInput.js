"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnTimelinesCreateWithoutUserInput = class SubscriptionsOnTimelinesCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput)
], SubscriptionsOnTimelinesCreateWithoutUserInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateWithoutUserInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesCreateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateWithoutUserInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesCreateWithoutUserInput);
exports.SubscriptionsOnTimelinesCreateWithoutUserInput = SubscriptionsOnTimelinesCreateWithoutUserInput;
