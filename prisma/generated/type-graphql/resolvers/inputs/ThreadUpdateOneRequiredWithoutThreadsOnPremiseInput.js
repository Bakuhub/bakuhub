"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadCreateOrConnectWithoutThreadsOnPremiseInput");
const ThreadCreateWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnPremiseInput");
const ThreadUpdateWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadUpdateWithoutThreadsOnPremiseInput");
const ThreadUpsertWithoutThreadsOnPremiseInput_1 = require("../inputs/ThreadUpsertWithoutThreadsOnPremiseInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput = class ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnPremiseInput_1.ThreadCreateWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnPremiseInput_1.ThreadCreateWithoutThreadsOnPremiseInput)
], ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnPremiseInput_1.ThreadCreateOrConnectWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutThreadsOnPremiseInput_1.ThreadCreateOrConnectWithoutThreadsOnPremiseInput)
], ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpsertWithoutThreadsOnPremiseInput_1.ThreadUpsertWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpsertWithoutThreadsOnPremiseInput_1.ThreadUpsertWithoutThreadsOnPremiseInput)
], ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnPremiseInput_1.ThreadUpdateWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutThreadsOnPremiseInput_1.ThreadUpdateWithoutThreadsOnPremiseInput)
], ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput.prototype, "update", void 0);
ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput", {
        isAbstract: true
    })
], ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput);
exports.ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput = ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput;
