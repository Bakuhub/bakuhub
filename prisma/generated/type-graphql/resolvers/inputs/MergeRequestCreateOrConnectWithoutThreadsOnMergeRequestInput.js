"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestCreateWithoutThreadsOnMergeRequestInput");
const MergeRequestWhereUniqueInput_1 = require("../inputs/MergeRequestWhereUniqueInput");
let MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput = class MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateWithoutThreadsOnMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateWithoutThreadsOnMergeRequestInput)
], MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput.prototype, "create", void 0);
MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput", {
        isAbstract: true
    })
], MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput);
exports.MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput = MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput;
