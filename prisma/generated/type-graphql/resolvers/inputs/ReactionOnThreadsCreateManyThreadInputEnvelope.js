"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateManyThreadInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateManyThreadInput_1 = require("../inputs/ReactionOnThreadsCreateManyThreadInput");
let ReactionOnThreadsCreateManyThreadInputEnvelope = class ReactionOnThreadsCreateManyThreadInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateManyThreadInput_1.ReactionOnThreadsCreateManyThreadInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsCreateManyThreadInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReactionOnThreadsCreateManyThreadInputEnvelope.prototype, "skipDuplicates", void 0);
ReactionOnThreadsCreateManyThreadInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateManyThreadInputEnvelope", {
        isAbstract: true
    })
], ReactionOnThreadsCreateManyThreadInputEnvelope);
exports.ReactionOnThreadsCreateManyThreadInputEnvelope = ReactionOnThreadsCreateManyThreadInputEnvelope;
