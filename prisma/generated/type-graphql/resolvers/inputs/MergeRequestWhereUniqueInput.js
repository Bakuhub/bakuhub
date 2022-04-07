"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MergeRequestWhereUniqueInput = class MergeRequestWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MergeRequestWhereUniqueInput.prototype, "visionId", void 0);
MergeRequestWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestWhereUniqueInput", {
        isAbstract: true
    })
], MergeRequestWhereUniqueInput);
exports.MergeRequestWhereUniqueInput = MergeRequestWhereUniqueInput;
