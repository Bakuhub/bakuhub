"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateManyUserInput_1 = require("../inputs/ReactionOnThreadsCreateManyUserInput");
let ReactionOnThreadsCreateManyUserInputEnvelope = class ReactionOnThreadsCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateManyUserInput_1.ReactionOnThreadsCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReactionOnThreadsCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
ReactionOnThreadsCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], ReactionOnThreadsCreateManyUserInputEnvelope);
exports.ReactionOnThreadsCreateManyUserInputEnvelope = ReactionOnThreadsCreateManyUserInputEnvelope;
