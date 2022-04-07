"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestCreateNestedOneWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateOrConnectWithoutVisionInput_1 = require("../inputs/MergeRequestCreateOrConnectWithoutVisionInput");
const MergeRequestCreateWithoutVisionInput_1 = require("../inputs/MergeRequestCreateWithoutVisionInput");
const MergeRequestWhereUniqueInput_1 = require("../inputs/MergeRequestWhereUniqueInput");
let MergeRequestCreateNestedOneWithoutVisionInput = class MergeRequestCreateNestedOneWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateWithoutVisionInput_1.MergeRequestCreateWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateWithoutVisionInput_1.MergeRequestCreateWithoutVisionInput)
], MergeRequestCreateNestedOneWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateOrConnectWithoutVisionInput_1.MergeRequestCreateOrConnectWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateOrConnectWithoutVisionInput_1.MergeRequestCreateOrConnectWithoutVisionInput)
], MergeRequestCreateNestedOneWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], MergeRequestCreateNestedOneWithoutVisionInput.prototype, "connect", void 0);
MergeRequestCreateNestedOneWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestCreateNestedOneWithoutVisionInput", {
        isAbstract: true
    })
], MergeRequestCreateNestedOneWithoutVisionInput);
exports.MergeRequestCreateNestedOneWithoutVisionInput = MergeRequestCreateNestedOneWithoutVisionInput;
