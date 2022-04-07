"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCreateManyVisionInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateManyVisionInput_1 = require("../inputs/ThreadsOnVisionCreateManyVisionInput");
let ThreadsOnVisionCreateManyVisionInputEnvelope = class ThreadsOnVisionCreateManyVisionInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionCreateManyVisionInput_1.ThreadsOnVisionCreateManyVisionInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionCreateManyVisionInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnVisionCreateManyVisionInputEnvelope.prototype, "skipDuplicates", void 0);
ThreadsOnVisionCreateManyVisionInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCreateManyVisionInputEnvelope", {
        isAbstract: true
    })
], ThreadsOnVisionCreateManyVisionInputEnvelope);
exports.ThreadsOnVisionCreateManyVisionInputEnvelope = ThreadsOnVisionCreateManyVisionInputEnvelope;
