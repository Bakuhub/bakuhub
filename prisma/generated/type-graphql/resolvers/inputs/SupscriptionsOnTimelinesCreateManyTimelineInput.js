"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateManyTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SupscriptionsOnTimelinesCreateManyTimelineInput = class SupscriptionsOnTimelinesCreateManyTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCreateManyTimelineInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCreateManyTimelineInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateManyTimelineInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateManyTimelineInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesCreateManyTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateManyTimelineInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateManyTimelineInput);
exports.SupscriptionsOnTimelinesCreateManyTimelineInput = SupscriptionsOnTimelinesCreateManyTimelineInput;
