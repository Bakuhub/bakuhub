"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseUpsertWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseCreateWithoutThreadInput");
const ThreadsOnPremiseUpdateWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseUpdateWithoutThreadInput");
let ThreadsOnPremiseUpsertWithoutThreadInput = class ThreadsOnPremiseUpsertWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateWithoutThreadInput_1.ThreadsOnPremiseUpdateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateWithoutThreadInput_1.ThreadsOnPremiseUpdateWithoutThreadInput)
], ThreadsOnPremiseUpsertWithoutThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutThreadInput_1.ThreadsOnPremiseCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateWithoutThreadInput_1.ThreadsOnPremiseCreateWithoutThreadInput)
], ThreadsOnPremiseUpsertWithoutThreadInput.prototype, "create", void 0);
ThreadsOnPremiseUpsertWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseUpsertWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnPremiseUpsertWithoutThreadInput);
exports.ThreadsOnPremiseUpsertWithoutThreadInput = ThreadsOnPremiseUpsertWithoutThreadInput;
