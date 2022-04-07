"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestCreateWithoutMergeRequestInput");
const ThreadsOnMergeRequestUpdateWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateWithoutMergeRequestInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput = class ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpdateWithoutMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpdateWithoutMergeRequestInput)
], ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateWithoutMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateWithoutMergeRequestInput)
], ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput.prototype, "create", void 0);
ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput);
exports.ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput = ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput;
