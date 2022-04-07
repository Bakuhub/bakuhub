"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateManyAuthorInput_1 = require("../inputs/ThreadCreateManyAuthorInput");
let ThreadCreateManyAuthorInputEnvelope = class ThreadCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateManyAuthorInput_1.ThreadCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadCreateManyAuthorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
ThreadCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateManyAuthorInputEnvelope", {
        isAbstract: true
    })
], ThreadCreateManyAuthorInputEnvelope);
exports.ThreadCreateManyAuthorInputEnvelope = ThreadCreateManyAuthorInputEnvelope;
