"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateManyUserInput_1 = require("../inputs/VotesOnVisionCreateManyUserInput");
let VotesOnVisionCreateManyUserInputEnvelope = class VotesOnVisionCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateManyUserInput_1.VotesOnVisionCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VotesOnVisionCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
VotesOnVisionCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], VotesOnVisionCreateManyUserInputEnvelope);
exports.VotesOnVisionCreateManyUserInputEnvelope = VotesOnVisionCreateManyUserInputEnvelope;
