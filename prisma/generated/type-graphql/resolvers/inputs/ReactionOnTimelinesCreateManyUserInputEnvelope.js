"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateManyUserInput_1 = require("../inputs/ReactionOnTimelinesCreateManyUserInput");
let ReactionOnTimelinesCreateManyUserInputEnvelope = class ReactionOnTimelinesCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateManyUserInput_1.ReactionOnTimelinesCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReactionOnTimelinesCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
ReactionOnTimelinesCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateManyUserInputEnvelope);
exports.ReactionOnTimelinesCreateManyUserInputEnvelope = ReactionOnTimelinesCreateManyUserInputEnvelope;
