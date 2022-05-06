"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput");
const MergeRequestCreateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestCreateWithoutThreadsOnMergeRequestInput");
const MergeRequestWhereUniqueInput_1 = require("../inputs/MergeRequestWhereUniqueInput");
let MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput = class MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateWithoutThreadsOnMergeRequestInput)
], MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput)
], MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput.prototype, "connect", void 0);
MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput", {
        isAbstract: true
    })
], MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput);
exports.MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput = MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput;
