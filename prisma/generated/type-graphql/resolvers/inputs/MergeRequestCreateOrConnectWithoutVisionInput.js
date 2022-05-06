"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestCreateOrConnectWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateWithoutVisionInput_1 = require("../inputs/MergeRequestCreateWithoutVisionInput");
const MergeRequestWhereUniqueInput_1 = require("../inputs/MergeRequestWhereUniqueInput");
let MergeRequestCreateOrConnectWithoutVisionInput = class MergeRequestCreateOrConnectWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], MergeRequestCreateOrConnectWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateWithoutVisionInput_1.MergeRequestCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateWithoutVisionInput_1.MergeRequestCreateWithoutVisionInput)
], MergeRequestCreateOrConnectWithoutVisionInput.prototype, "create", void 0);
MergeRequestCreateOrConnectWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestCreateOrConnectWithoutVisionInput", {
        isAbstract: true
    })
], MergeRequestCreateOrConnectWithoutVisionInput);
exports.MergeRequestCreateOrConnectWithoutVisionInput = MergeRequestCreateOrConnectWithoutVisionInput;
