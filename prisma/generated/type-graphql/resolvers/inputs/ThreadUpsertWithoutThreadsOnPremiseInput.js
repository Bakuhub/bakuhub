"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpsertWithoutThreadsOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnPremiseInput");
const ThreadUpdateWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadUpdateWithoutThreadsOnPremiseInput");
let ThreadUpsertWithoutThreadsOnPremiseInput = class ThreadUpsertWithoutThreadsOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnPremiseInput_1.ThreadUpdateWithoutThreadsOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutThreadsOnPremiseInput_1.ThreadUpdateWithoutThreadsOnPremiseInput)
], ThreadUpsertWithoutThreadsOnPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnPremiseInput_1.ThreadCreateWithoutThreadsOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnPremiseInput_1.ThreadCreateWithoutThreadsOnPremiseInput)
], ThreadUpsertWithoutThreadsOnPremiseInput.prototype, "create", void 0);
ThreadUpsertWithoutThreadsOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpsertWithoutThreadsOnPremiseInput", {
        isAbstract: true
    })
], ThreadUpsertWithoutThreadsOnPremiseInput);
exports.ThreadUpsertWithoutThreadsOnPremiseInput = ThreadUpsertWithoutThreadsOnPremiseInput;
