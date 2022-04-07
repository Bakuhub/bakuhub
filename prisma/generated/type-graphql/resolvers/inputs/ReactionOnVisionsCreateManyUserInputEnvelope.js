"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateManyUserInput_1 = require("../inputs/ReactionOnVisionsCreateManyUserInput");
let ReactionOnVisionsCreateManyUserInputEnvelope = class ReactionOnVisionsCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateManyUserInput_1.ReactionOnVisionsCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReactionOnVisionsCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
ReactionOnVisionsCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], ReactionOnVisionsCreateManyUserInputEnvelope);
exports.ReactionOnVisionsCreateManyUserInputEnvelope = ReactionOnVisionsCreateManyUserInputEnvelope;
