"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateManyAuthorInput_1 = require("../inputs/TimelineCreateManyAuthorInput");
let TimelineCreateManyAuthorInputEnvelope = class TimelineCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineCreateManyAuthorInput_1.TimelineCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineCreateManyAuthorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TimelineCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
TimelineCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateManyAuthorInputEnvelope", {
        isAbstract: true
    })
], TimelineCreateManyAuthorInputEnvelope);
exports.TimelineCreateManyAuthorInputEnvelope = TimelineCreateManyAuthorInputEnvelope;
