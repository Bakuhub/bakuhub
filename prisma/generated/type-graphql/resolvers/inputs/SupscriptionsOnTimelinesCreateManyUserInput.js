"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SupscriptionsOnTimelinesCreateManyUserInput = class SupscriptionsOnTimelinesCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCreateManyUserInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCreateManyUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateManyUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateManyUserInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateManyUserInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateManyUserInput);
exports.SupscriptionsOnTimelinesCreateManyUserInput = SupscriptionsOnTimelinesCreateManyUserInput;
