"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput");
const VisionCreateNestedOneWithoutMergeRequestInput_1 = require("../inputs/VisionCreateNestedOneWithoutMergeRequestInput");
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let MergeRequestCreateInput = class MergeRequestCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutMergeRequestInput_1.VisionCreateNestedOneWithoutMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutMergeRequestInput_1.VisionCreateNestedOneWithoutMergeRequestInput)
], MergeRequestCreateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput)
], MergeRequestCreateInput.prototype, "threadsOnMergeRequest", void 0);
MergeRequestCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestCreateInput", {
        isAbstract: true
    })
], MergeRequestCreateInput);
exports.MergeRequestCreateInput = MergeRequestCreateInput;
