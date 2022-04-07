"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestWhereUniqueInput_1 = require("../../../inputs/MergeRequestWhereUniqueInput");
let DeleteMergeRequestArgs = class DeleteMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], DeleteMergeRequestArgs.prototype, "where", void 0);
DeleteMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteMergeRequestArgs);
exports.DeleteMergeRequestArgs = DeleteMergeRequestArgs;
