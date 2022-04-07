"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestWhereUniqueInput_1 = require("../../../inputs/MergeRequestWhereUniqueInput");
let FindUniqueMergeRequestArgs = class FindUniqueMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereUniqueInput_1.MergeRequestWhereUniqueInput)
], FindUniqueMergeRequestArgs.prototype, "where", void 0);
FindUniqueMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueMergeRequestArgs);
exports.FindUniqueMergeRequestArgs = FindUniqueMergeRequestArgs;
