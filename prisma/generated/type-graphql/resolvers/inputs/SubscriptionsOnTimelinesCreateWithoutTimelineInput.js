"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCreateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnTimelinesCreateWithoutTimelineInput = class SubscriptionsOnTimelinesCreateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1.UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1.UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput)
], SubscriptionsOnTimelinesCreateWithoutTimelineInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateWithoutTimelineInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesCreateWithoutTimelineInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateWithoutTimelineInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateWithoutTimelineInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesCreateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateWithoutTimelineInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesCreateWithoutTimelineInput);
exports.SubscriptionsOnTimelinesCreateWithoutTimelineInput = SubscriptionsOnTimelinesCreateWithoutTimelineInput;
