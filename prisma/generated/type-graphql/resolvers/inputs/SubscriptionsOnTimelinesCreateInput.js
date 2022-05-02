"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput");
const UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnTimelinesCreateInput = class SubscriptionsOnTimelinesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1.UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1.UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput)
], SubscriptionsOnTimelinesCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput_1.TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput)
], SubscriptionsOnTimelinesCreateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SubscriptionsOnTimelinesCreateInput.prototype, "hasUnreadNotifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesCreateInput);
exports.SubscriptionsOnTimelinesCreateInput = SubscriptionsOnTimelinesCreateInput;
