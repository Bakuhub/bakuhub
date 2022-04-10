"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateManyUserInput_1 = require("../inputs/VotesOnTimelineCreateManyUserInput");
let VotesOnTimelineCreateManyUserInputEnvelope = class VotesOnTimelineCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateManyUserInput_1.VotesOnTimelineCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VotesOnTimelineCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
VotesOnTimelineCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], VotesOnTimelineCreateManyUserInputEnvelope);
exports.VotesOnTimelineCreateManyUserInputEnvelope = VotesOnTimelineCreateManyUserInputEnvelope;
