"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateInput_1 = require("../../../inputs/MergeRequestCreateInput");
let CreateMergeRequestArgs = class CreateMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateInput_1.MergeRequestCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateInput_1.MergeRequestCreateInput)
], CreateMergeRequestArgs.prototype, "data", void 0);
CreateMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateMergeRequestArgs);
exports.CreateMergeRequestArgs = CreateMergeRequestArgs;
