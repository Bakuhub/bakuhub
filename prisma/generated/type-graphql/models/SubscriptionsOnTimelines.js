"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../enums/SubscriptionType");
let SubscriptionsOnTimelines = class SubscriptionsOnTimelines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelines.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelines.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelines.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelines.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelines.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelines.prototype, "updatedAt", void 0);
SubscriptionsOnTimelines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SubscriptionsOnTimelines", {
        isAbstract: true
    })
], SubscriptionsOnTimelines);
exports.SubscriptionsOnTimelines = SubscriptionsOnTimelines;
