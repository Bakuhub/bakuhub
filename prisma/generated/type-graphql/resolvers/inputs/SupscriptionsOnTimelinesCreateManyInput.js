"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SupscriptionsOnTimelinesCreateManyInput = class SupscriptionsOnTimelinesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCreateManyInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCreateManyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateManyInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateManyInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateManyInput);
exports.SupscriptionsOnTimelinesCreateManyInput = SupscriptionsOnTimelinesCreateManyInput;
