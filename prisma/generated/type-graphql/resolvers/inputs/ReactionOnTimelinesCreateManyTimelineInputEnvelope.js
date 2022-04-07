"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateManyTimelineInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateManyTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateManyTimelineInput");
let ReactionOnTimelinesCreateManyTimelineInputEnvelope = class ReactionOnTimelinesCreateManyTimelineInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateManyTimelineInput_1.ReactionOnTimelinesCreateManyTimelineInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesCreateManyTimelineInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReactionOnTimelinesCreateManyTimelineInputEnvelope.prototype, "skipDuplicates", void 0);
ReactionOnTimelinesCreateManyTimelineInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateManyTimelineInputEnvelope", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateManyTimelineInputEnvelope);
exports.ReactionOnTimelinesCreateManyTimelineInputEnvelope = ReactionOnTimelinesCreateManyTimelineInputEnvelope;
