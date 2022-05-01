"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SupscriptionsOnTimelinesCreateWithoutUserInput = class SupscriptionsOnTimelinesCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput_1.TimelineCreateNestedOneWithoutSupscriptionsOnTimelinesInput)
], SupscriptionsOnTimelinesCreateWithoutUserInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SupscriptionsOnTimelinesCreateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SupscriptionsOnTimelinesCreateWithoutUserInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateWithoutUserInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateWithoutUserInput);
exports.SupscriptionsOnTimelinesCreateWithoutUserInput = SupscriptionsOnTimelinesCreateWithoutUserInput;
