"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestUpsertWithoutThreadsOnMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestCreateWithoutThreadsOnMergeRequestInput");
const MergeRequestUpdateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestUpdateWithoutThreadsOnMergeRequestInput");
let MergeRequestUpsertWithoutThreadsOnMergeRequestInput = class MergeRequestUpsertWithoutThreadsOnMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateWithoutThreadsOnMergeRequestInput_1.MergeRequestUpdateWithoutThreadsOnMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateWithoutThreadsOnMergeRequestInput_1.MergeRequestUpdateWithoutThreadsOnMergeRequestInput)
], MergeRequestUpsertWithoutThreadsOnMergeRequestInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateWithoutThreadsOnMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateWithoutThreadsOnMergeRequestInput)
], MergeRequestUpsertWithoutThreadsOnMergeRequestInput.prototype, "create", void 0);
MergeRequestUpsertWithoutThreadsOnMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestUpsertWithoutThreadsOnMergeRequestInput", {
        isAbstract: true
    })
], MergeRequestUpsertWithoutThreadsOnMergeRequestInput);
exports.MergeRequestUpsertWithoutThreadsOnMergeRequestInput = MergeRequestUpsertWithoutThreadsOnMergeRequestInput;
