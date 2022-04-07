"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpsertWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateWithoutMergeRequestInput_1 = require("../inputs/VisionCreateWithoutMergeRequestInput");
const VisionUpdateWithoutMergeRequestInput_1 = require("../inputs/VisionUpdateWithoutMergeRequestInput");
let VisionUpsertWithoutMergeRequestInput = class VisionUpsertWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateWithoutMergeRequestInput_1.VisionUpdateWithoutMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionUpdateWithoutMergeRequestInput_1.VisionUpdateWithoutMergeRequestInput)
], VisionUpsertWithoutMergeRequestInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateWithoutMergeRequestInput_1.VisionCreateWithoutMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateWithoutMergeRequestInput_1.VisionCreateWithoutMergeRequestInput)
], VisionUpsertWithoutMergeRequestInput.prototype, "create", void 0);
VisionUpsertWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpsertWithoutMergeRequestInput", {
        isAbstract: true
    })
], VisionUpsertWithoutMergeRequestInput);
exports.VisionUpsertWithoutMergeRequestInput = VisionUpsertWithoutMergeRequestInput;
