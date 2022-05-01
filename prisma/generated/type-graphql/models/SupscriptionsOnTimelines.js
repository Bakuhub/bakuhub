"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../enums/SubscriptionType");
let SupscriptionsOnTimelines = class SupscriptionsOnTimelines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelines.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelines.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelines.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelines.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelines.prototype, "updatedAt", void 0);
SupscriptionsOnTimelines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SupscriptionsOnTimelines", {
        isAbstract: true
    })
], SupscriptionsOnTimelines);
exports.SupscriptionsOnTimelines = SupscriptionsOnTimelines;
