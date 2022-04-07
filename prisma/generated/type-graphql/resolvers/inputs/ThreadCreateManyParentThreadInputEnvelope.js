"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateManyParentThreadInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateManyParentThreadInput_1 = require("../inputs/ThreadCreateManyParentThreadInput");
let ThreadCreateManyParentThreadInputEnvelope = class ThreadCreateManyParentThreadInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateManyParentThreadInput_1.ThreadCreateManyParentThreadInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadCreateManyParentThreadInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadCreateManyParentThreadInputEnvelope.prototype, "skipDuplicates", void 0);
ThreadCreateManyParentThreadInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateManyParentThreadInputEnvelope", {
        isAbstract: true
    })
], ThreadCreateManyParentThreadInputEnvelope);
exports.ThreadCreateManyParentThreadInputEnvelope = ThreadCreateManyParentThreadInputEnvelope;
