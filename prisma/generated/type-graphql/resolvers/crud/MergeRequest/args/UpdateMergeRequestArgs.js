"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestUpdateInput_1 = require("../../../inputs/MergeRequestUpdateInput");
const MergeRequestWhereUniqueInput_1 = require("../../../inputs/MergeRequestWhereUniqueInput");
let UpdateMergeRequestArgs = class UpdateMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateInput_1.MergeRequestUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateInput_1.MergeRequestUpdateInput)
], UpdateMergeRequestArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], UpdateMergeRequestArgs.prototype, "where", void 0);
UpdateMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateMergeRequestArgs);
exports.UpdateMergeRequestArgs = UpdateMergeRequestArgs;
