"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCreateManyPremiseInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateManyPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateManyPremiseInput");
let ThreadsOnPremiseCreateManyPremiseInputEnvelope = class ThreadsOnPremiseCreateManyPremiseInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateManyPremiseInput_1.ThreadsOnPremiseCreateManyPremiseInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseCreateManyPremiseInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnPremiseCreateManyPremiseInputEnvelope.prototype, "skipDuplicates", void 0);
ThreadsOnPremiseCreateManyPremiseInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCreateManyPremiseInputEnvelope", {
        isAbstract: true
    })
], ThreadsOnPremiseCreateManyPremiseInputEnvelope);
exports.ThreadsOnPremiseCreateManyPremiseInputEnvelope = ThreadsOnPremiseCreateManyPremiseInputEnvelope;
