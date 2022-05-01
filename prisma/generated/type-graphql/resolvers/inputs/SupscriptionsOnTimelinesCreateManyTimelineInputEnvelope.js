"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateManyTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateManyTimelineInput");
let SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope = class SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateManyTimelineInput_1.SupscriptionsOnTimelinesCreateManyTimelineInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope.prototype, "skipDuplicates", void 0);
SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope);
exports.SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope = SupscriptionsOnTimelinesCreateManyTimelineInputEnvelope;
