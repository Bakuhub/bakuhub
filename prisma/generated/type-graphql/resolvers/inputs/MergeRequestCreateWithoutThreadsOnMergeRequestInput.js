"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestCreateWithoutThreadsOnMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateNestedOneWithoutMergeRequestInput_1 = require("../inputs/VisionCreateNestedOneWithoutMergeRequestInput");
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let MergeRequestCreateWithoutThreadsOnMergeRequestInput = class MergeRequestCreateWithoutThreadsOnMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateWithoutThreadsOnMergeRequestInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateWithoutThreadsOnMergeRequestInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateWithoutThreadsOnMergeRequestInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestCreateWithoutThreadsOnMergeRequestInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutMergeRequestInput_1.VisionCreateNestedOneWithoutMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutMergeRequestInput_1.VisionCreateNestedOneWithoutMergeRequestInput)
], MergeRequestCreateWithoutThreadsOnMergeRequestInput.prototype, "vision", void 0);
MergeRequestCreateWithoutThreadsOnMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestCreateWithoutThreadsOnMergeRequestInput", {
        isAbstract: true
    })
], MergeRequestCreateWithoutThreadsOnMergeRequestInput);
exports.MergeRequestCreateWithoutThreadsOnMergeRequestInput = MergeRequestCreateWithoutThreadsOnMergeRequestInput;
