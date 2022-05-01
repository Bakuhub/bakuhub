"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SupscriptionsOnTimelinesCreateWithoutTimelineInput = class SupscriptionsOnTimelinesCreateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1.UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1.UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput)
], SupscriptionsOnTimelinesCreateWithoutTimelineInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCreateWithoutTimelineInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateWithoutTimelineInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateWithoutTimelineInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesCreateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateWithoutTimelineInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateWithoutTimelineInput);
exports.SupscriptionsOnTimelinesCreateWithoutTimelineInput = SupscriptionsOnTimelinesCreateWithoutTimelineInput;
