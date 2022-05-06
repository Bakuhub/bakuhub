"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestWhereInput_1 = require("../../../inputs/MergeRequestWhereInput");
let DeleteManyMergeRequestArgs = class DeleteManyMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereInput_1.MergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereInput_1.MergeRequestWhereInput)
], DeleteManyMergeRequestArgs.prototype, "where", void 0);
DeleteManyMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMergeRequestArgs);
exports.DeleteManyMergeRequestArgs = DeleteManyMergeRequestArgs;
