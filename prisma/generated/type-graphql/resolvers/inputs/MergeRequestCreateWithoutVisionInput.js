"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestCreateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput");
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let MergeRequestCreateWithoutVisionInput = class MergeRequestCreateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateWithoutVisionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateWithoutVisionInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateWithoutVisionInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateWithoutVisionInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput)
], MergeRequestCreateWithoutVisionInput.prototype, "threadsOnMergeRequest", void 0);
MergeRequestCreateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestCreateWithoutVisionInput", {
        isAbstract: true
    })
], MergeRequestCreateWithoutVisionInput);
exports.MergeRequestCreateWithoutVisionInput = MergeRequestCreateWithoutVisionInput;
