"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestUpdateManyMutationInput_1 = require("../../../inputs/MergeRequestUpdateManyMutationInput");
const MergeRequestWhereInput_1 = require("../../../inputs/MergeRequestWhereInput");
let UpdateManyMergeRequestArgs = class UpdateManyMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestUpdateManyMutationInput_1.MergeRequestUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestUpdateManyMutationInput_1.MergeRequestUpdateManyMutationInput)
], UpdateManyMergeRequestArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereInput_1.MergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereInput_1.MergeRequestWhereInput)
], UpdateManyMergeRequestArgs.prototype, "where", void 0);
UpdateManyMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMergeRequestArgs);
exports.UpdateManyMergeRequestArgs = UpdateManyMergeRequestArgs;
