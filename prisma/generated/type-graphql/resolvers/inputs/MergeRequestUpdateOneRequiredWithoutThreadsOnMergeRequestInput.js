"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput");
const MergeRequestCreateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestCreateWithoutThreadsOnMergeRequestInput");
const MergeRequestUpdateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestUpdateWithoutThreadsOnMergeRequestInput");
const MergeRequestUpsertWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestUpsertWithoutThreadsOnMergeRequestInput");
const MergeRequestWhereUniqueInput_1 = require("../inputs/MergeRequestWhereUniqueInput");
let MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput = class MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateWithoutThreadsOnMergeRequestInput)
], MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput)
], MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpsertWithoutThreadsOnMergeRequestInput_1.MergeRequestUpsertWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestUpsertWithoutThreadsOnMergeRequestInput_1.MergeRequestUpsertWithoutThreadsOnMergeRequestInput)
], MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateWithoutThreadsOnMergeRequestInput_1.MergeRequestUpdateWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateWithoutThreadsOnMergeRequestInput_1.MergeRequestUpdateWithoutThreadsOnMergeRequestInput)
], MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput.prototype, "update", void 0);
MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput", {
        isAbstract: true
    })
], MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput);
exports.MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput = MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput;
