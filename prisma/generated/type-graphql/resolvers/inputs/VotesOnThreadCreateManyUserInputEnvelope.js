"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateManyUserInput_1 = require("../inputs/VotesOnThreadCreateManyUserInput");
let VotesOnThreadCreateManyUserInputEnvelope = class VotesOnThreadCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateManyUserInput_1.VotesOnThreadCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VotesOnThreadCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
VotesOnThreadCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], VotesOnThreadCreateManyUserInputEnvelope);
exports.VotesOnThreadCreateManyUserInputEnvelope = VotesOnThreadCreateManyUserInputEnvelope;
