"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateManyTimelineInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateManyTimelineInput_1 = require("../inputs/VotesOnTimelineCreateManyTimelineInput");
let VotesOnTimelineCreateManyTimelineInputEnvelope = class VotesOnTimelineCreateManyTimelineInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateManyTimelineInput_1.VotesOnTimelineCreateManyTimelineInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineCreateManyTimelineInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VotesOnTimelineCreateManyTimelineInputEnvelope.prototype, "skipDuplicates", void 0);
VotesOnTimelineCreateManyTimelineInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateManyTimelineInputEnvelope", {
        isAbstract: true
    })
], VotesOnTimelineCreateManyTimelineInputEnvelope);
exports.VotesOnTimelineCreateManyTimelineInputEnvelope = VotesOnTimelineCreateManyTimelineInputEnvelope;
