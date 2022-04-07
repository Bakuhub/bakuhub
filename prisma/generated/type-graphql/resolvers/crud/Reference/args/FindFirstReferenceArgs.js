"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReferenceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceOrderByWithRelationInput_1 = require("../../../inputs/ReferenceOrderByWithRelationInput");
const ReferenceWhereInput_1 = require("../../../inputs/ReferenceWhereInput");
const ReferenceWhereUniqueInput_1 = require("../../../inputs/ReferenceWhereUniqueInput");
const ReferenceScalarFieldEnum_1 = require("../../../../enums/ReferenceScalarFieldEnum");
let FindFirstReferenceArgs = class FindFirstReferenceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], FindFirstReferenceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceOrderByWithRelationInput_1.ReferenceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstReferenceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], FindFirstReferenceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstReferenceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstReferenceArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceScalarFieldEnum_1.ReferenceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstReferenceArgs.prototype, "distinct", void 0);
FindFirstReferenceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstReferenceArgs);
exports.FindFirstReferenceArgs = FindFirstReferenceArgs;
