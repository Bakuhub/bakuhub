"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestScalarWhereInput_1 = require("../inputs/ThreadsOnMergeRequestScalarWhereInput");
const ThreadsOnMergeRequestUpdateManyMutationInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateManyMutationInput");
let ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput = class ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestScalarWhereInput_1.ThreadsOnMergeRequestScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestScalarWhereInput_1.ThreadsOnMergeRequestScalarWhereInput)
], ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateManyMutationInput_1.ThreadsOnMergeRequestUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateManyMutationInput_1.ThreadsOnMergeRequestUpdateManyMutationInput)
], ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput.prototype, "data", void 0);
ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput);
exports.ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput = ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput;
