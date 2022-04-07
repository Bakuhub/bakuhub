"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestUpdateOneWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateOrConnectWithoutVisionInput_1 = require("../inputs/MergeRequestCreateOrConnectWithoutVisionInput");
const MergeRequestCreateWithoutVisionInput_1 = require("../inputs/MergeRequestCreateWithoutVisionInput");
const MergeRequestUpdateWithoutVisionInput_1 = require("../inputs/MergeRequestUpdateWithoutVisionInput");
const MergeRequestUpsertWithoutVisionInput_1 = require("../inputs/MergeRequestUpsertWithoutVisionInput");
const MergeRequestWhereUniqueInput_1 = require("../inputs/MergeRequestWhereUniqueInput");
let MergeRequestUpdateOneWithoutVisionInput = class MergeRequestUpdateOneWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateWithoutVisionInput_1.MergeRequestCreateWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateWithoutVisionInput_1.MergeRequestCreateWithoutVisionInput)
], MergeRequestUpdateOneWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateOrConnectWithoutVisionInput_1.MergeRequestCreateOrConnectWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateOrConnectWithoutVisionInput_1.MergeRequestCreateOrConnectWithoutVisionInput)
], MergeRequestUpdateOneWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpsertWithoutVisionInput_1.MergeRequestUpsertWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestUpsertWithoutVisionInput_1.MergeRequestUpsertWithoutVisionInput)
], MergeRequestUpdateOneWithoutVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MergeRequestUpdateOneWithoutVisionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MergeRequestUpdateOneWithoutVisionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], MergeRequestUpdateOneWithoutVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateWithoutVisionInput_1.MergeRequestUpdateWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateWithoutVisionInput_1.MergeRequestUpdateWithoutVisionInput)
], MergeRequestUpdateOneWithoutVisionInput.prototype, "update", void 0);
MergeRequestUpdateOneWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestUpdateOneWithoutVisionInput", {
        isAbstract: true
    })
], MergeRequestUpdateOneWithoutVisionInput);
exports.MergeRequestUpdateOneWithoutVisionInput = MergeRequestUpdateOneWithoutVisionInput;
