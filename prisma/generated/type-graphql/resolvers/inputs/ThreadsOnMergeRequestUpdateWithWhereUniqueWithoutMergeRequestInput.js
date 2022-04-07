"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestUpdateWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateWithoutMergeRequestInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput = class ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpdateWithoutMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpdateWithoutMergeRequestInput)
], ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput.prototype, "data", void 0);
ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput);
exports.ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput = ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput;
