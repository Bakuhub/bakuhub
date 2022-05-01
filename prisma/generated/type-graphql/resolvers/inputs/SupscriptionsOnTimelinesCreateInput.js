"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput");
const UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SupscriptionsOnTimelinesCreateInput = class SupscriptionsOnTimelinesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1.UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1.UserCreateNestedOneWithoutSupscriptionsOnTimelinesInput)
], SupscriptionsOnTimelinesCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput)
], SupscriptionsOnTimelinesCreateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateInput);
exports.SupscriptionsOnTimelinesCreateInput = SupscriptionsOnTimelinesCreateInput;
