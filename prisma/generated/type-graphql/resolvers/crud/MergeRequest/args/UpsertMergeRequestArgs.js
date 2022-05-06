"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateInput_1 = require("../../../inputs/MergeRequestCreateInput");
const MergeRequestUpdateInput_1 = require("../../../inputs/MergeRequestUpdateInput");
const MergeRequestWhereUniqueInput_1 = require("../../../inputs/MergeRequestWhereUniqueInput");
let UpsertMergeRequestArgs = class UpsertMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], UpsertMergeRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateInput_1.MergeRequestCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateInput_1.MergeRequestCreateInput)
], UpsertMergeRequestArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateInput_1.MergeRequestUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateInput_1.MergeRequestUpdateInput)
], UpsertMergeRequestArgs.prototype, "update", void 0);
UpsertMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertMergeRequestArgs);
exports.UpsertMergeRequestArgs = UpsertMergeRequestArgs;
