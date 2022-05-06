"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateManyThreadInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateManyThreadInput_1 = require("../inputs/VotesOnThreadCreateManyThreadInput");
let VotesOnThreadCreateManyThreadInputEnvelope = class VotesOnThreadCreateManyThreadInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateManyThreadInput_1.VotesOnThreadCreateManyThreadInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadCreateManyThreadInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VotesOnThreadCreateManyThreadInputEnvelope.prototype, "skipDuplicates", void 0);
VotesOnThreadCreateManyThreadInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateManyThreadInputEnvelope", {
        isAbstract: true
    })
], VotesOnThreadCreateManyThreadInputEnvelope);
exports.VotesOnThreadCreateManyThreadInputEnvelope = VotesOnThreadCreateManyThreadInputEnvelope;
