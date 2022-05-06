"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateManyVisionInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateManyVisionInput_1 = require("../inputs/ReactionOnVisionsCreateManyVisionInput");
let ReactionOnVisionsCreateManyVisionInputEnvelope = class ReactionOnVisionsCreateManyVisionInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateManyVisionInput_1.ReactionOnVisionsCreateManyVisionInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsCreateManyVisionInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReactionOnVisionsCreateManyVisionInputEnvelope.prototype, "skipDuplicates", void 0);
ReactionOnVisionsCreateManyVisionInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateManyVisionInputEnvelope", {
        isAbstract: true
    })
], ReactionOnVisionsCreateManyVisionInputEnvelope);
exports.ReactionOnVisionsCreateManyVisionInputEnvelope = ReactionOnVisionsCreateManyVisionInputEnvelope;
