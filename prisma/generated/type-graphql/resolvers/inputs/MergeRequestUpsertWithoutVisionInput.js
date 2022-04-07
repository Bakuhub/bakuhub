"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestUpsertWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateWithoutVisionInput_1 = require("../inputs/MergeRequestCreateWithoutVisionInput");
const MergeRequestUpdateWithoutVisionInput_1 = require("../inputs/MergeRequestUpdateWithoutVisionInput");
let MergeRequestUpsertWithoutVisionInput = class MergeRequestUpsertWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateWithoutVisionInput_1.MergeRequestUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateWithoutVisionInput_1.MergeRequestUpdateWithoutVisionInput)
], MergeRequestUpsertWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateWithoutVisionInput_1.MergeRequestCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateWithoutVisionInput_1.MergeRequestCreateWithoutVisionInput)
], MergeRequestUpsertWithoutVisionInput.prototype, "create", void 0);
MergeRequestUpsertWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestUpsertWithoutVisionInput", {
        isAbstract: true
    })
], MergeRequestUpsertWithoutVisionInput);
exports.MergeRequestUpsertWithoutVisionInput = MergeRequestUpsertWithoutVisionInput;
