"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCreateManyTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateManyTimelineInput");
let SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope = class SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateManyTimelineInput_1.SubscriptionsOnTimelinesCreateManyTimelineInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope.prototype, "skipDuplicates", void 0);
SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope);
exports.SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope = SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope;
