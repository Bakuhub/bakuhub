"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateManyUserInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateManyUserInput");
let SubscriptionsOnTimelinesCreateManyUserInputEnvelope = class SubscriptionsOnTimelinesCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateManyUserInput_1.SubscriptionsOnTimelinesCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SubscriptionsOnTimelinesCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
SubscriptionsOnTimelinesCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesCreateManyUserInputEnvelope);
exports.SubscriptionsOnTimelinesCreateManyUserInputEnvelope = SubscriptionsOnTimelinesCreateManyUserInputEnvelope;
