"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCreateManyTimelineInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateManyTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateManyTimelineInput");
let ThreadsOnTimelineCreateManyTimelineInputEnvelope = class ThreadsOnTimelineCreateManyTimelineInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateManyTimelineInput_1.ThreadsOnTimelineCreateManyTimelineInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineCreateManyTimelineInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnTimelineCreateManyTimelineInputEnvelope.prototype, "skipDuplicates", void 0);
ThreadsOnTimelineCreateManyTimelineInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineCreateManyTimelineInputEnvelope", {
        isAbstract: true
    })
], ThreadsOnTimelineCreateManyTimelineInputEnvelope);
exports.ThreadsOnTimelineCreateManyTimelineInputEnvelope = ThreadsOnTimelineCreateManyTimelineInputEnvelope;
