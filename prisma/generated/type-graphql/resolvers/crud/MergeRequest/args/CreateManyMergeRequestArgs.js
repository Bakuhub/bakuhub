"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateManyInput_1 = require("../../../inputs/MergeRequestCreateManyInput");
let CreateManyMergeRequestArgs = class CreateManyMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestCreateManyInput_1.MergeRequestCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMergeRequestArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyMergeRequestArgs.prototype, "skipDuplicates", void 0);
CreateManyMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMergeRequestArgs);
exports.CreateManyMergeRequestArgs = CreateManyMergeRequestArgs;
