"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnTimelinesCreateManyInput = class SubscriptionsOnTimelinesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesCreateManyInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateManyInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesCreateManyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesCreateManyInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateManyInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesCreateManyInput);
exports.SubscriptionsOnTimelinesCreateManyInput = SubscriptionsOnTimelinesCreateManyInput;
