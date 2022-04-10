"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCreateManyVisionInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateManyVisionInput_1 = require("../inputs/VotesOnVisionCreateManyVisionInput");
let VotesOnVisionCreateManyVisionInputEnvelope = class VotesOnVisionCreateManyVisionInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateManyVisionInput_1.VotesOnVisionCreateManyVisionInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionCreateManyVisionInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VotesOnVisionCreateManyVisionInputEnvelope.prototype, "skipDuplicates", void 0);
VotesOnVisionCreateManyVisionInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCreateManyVisionInputEnvelope", {
        isAbstract: true
    })
], VotesOnVisionCreateManyVisionInputEnvelope);
exports.VotesOnVisionCreateManyVisionInputEnvelope = VotesOnVisionCreateManyVisionInputEnvelope;
