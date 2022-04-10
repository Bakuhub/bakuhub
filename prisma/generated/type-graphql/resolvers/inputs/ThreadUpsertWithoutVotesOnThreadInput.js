"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpsertWithoutVotesOnThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutVotesOnThreadInput_1 = require("../inputs/ThreadCreateWithoutVotesOnThreadInput");
const ThreadUpdateWithoutVotesOnThreadInput_1 = require("../inputs/ThreadUpdateWithoutVotesOnThreadInput");
let ThreadUpsertWithoutVotesOnThreadInput = class ThreadUpsertWithoutVotesOnThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutVotesOnThreadInput_1.ThreadUpdateWithoutVotesOnThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutVotesOnThreadInput_1.ThreadUpdateWithoutVotesOnThreadInput)
], ThreadUpsertWithoutVotesOnThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutVotesOnThreadInput_1.ThreadCreateWithoutVotesOnThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutVotesOnThreadInput_1.ThreadCreateWithoutVotesOnThreadInput)
], ThreadUpsertWithoutVotesOnThreadInput.prototype, "create", void 0);
ThreadUpsertWithoutVotesOnThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpsertWithoutVotesOnThreadInput", {
        isAbstract: true
    })
], ThreadUpsertWithoutVotesOnThreadInput);
exports.ThreadUpsertWithoutVotesOnThreadInput = ThreadUpsertWithoutVotesOnThreadInput;
