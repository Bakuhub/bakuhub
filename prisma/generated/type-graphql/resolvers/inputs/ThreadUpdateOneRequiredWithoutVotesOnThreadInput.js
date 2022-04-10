"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateOneRequiredWithoutVotesOnThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutVotesOnThreadInput_1 = require("../inputs/ThreadCreateOrConnectWithoutVotesOnThreadInput");
const ThreadCreateWithoutVotesOnThreadInput_1 = require("../inputs/ThreadCreateWithoutVotesOnThreadInput");
const ThreadUpdateWithoutVotesOnThreadInput_1 = require("../inputs/ThreadUpdateWithoutVotesOnThreadInput");
const ThreadUpsertWithoutVotesOnThreadInput_1 = require("../inputs/ThreadUpsertWithoutVotesOnThreadInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateOneRequiredWithoutVotesOnThreadInput = class ThreadUpdateOneRequiredWithoutVotesOnThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutVotesOnThreadInput_1.ThreadCreateWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutVotesOnThreadInput_1.ThreadCreateWithoutVotesOnThreadInput)
], ThreadUpdateOneRequiredWithoutVotesOnThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutVotesOnThreadInput_1.ThreadCreateOrConnectWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutVotesOnThreadInput_1.ThreadCreateOrConnectWithoutVotesOnThreadInput)
], ThreadUpdateOneRequiredWithoutVotesOnThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpsertWithoutVotesOnThreadInput_1.ThreadUpsertWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpsertWithoutVotesOnThreadInput_1.ThreadUpsertWithoutVotesOnThreadInput)
], ThreadUpdateOneRequiredWithoutVotesOnThreadInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpdateOneRequiredWithoutVotesOnThreadInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutVotesOnThreadInput_1.ThreadUpdateWithoutVotesOnThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutVotesOnThreadInput_1.ThreadUpdateWithoutVotesOnThreadInput)
], ThreadUpdateOneRequiredWithoutVotesOnThreadInput.prototype, "update", void 0);
ThreadUpdateOneRequiredWithoutVotesOnThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutVotesOnThreadInput", {
        isAbstract: true
    })
], ThreadUpdateOneRequiredWithoutVotesOnThreadInput);
exports.ThreadUpdateOneRequiredWithoutVotesOnThreadInput = ThreadUpdateOneRequiredWithoutVotesOnThreadInput;
