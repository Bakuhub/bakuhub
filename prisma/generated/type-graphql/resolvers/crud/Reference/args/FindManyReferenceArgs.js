"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReferenceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceOrderByWithRelationInput_1 = require("../../../inputs/ReferenceOrderByWithRelationInput");
const ReferenceWhereInput_1 = require("../../../inputs/ReferenceWhereInput");
const ReferenceWhereUniqueInput_1 = require("../../../inputs/ReferenceWhereUniqueInput");
const ReferenceScalarFieldEnum_1 = require("../../../../enums/ReferenceScalarFieldEnum");
let FindManyReferenceArgs = class FindManyReferenceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], FindManyReferenceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceOrderByWithRelationInput_1.ReferenceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReferenceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput)
], FindManyReferenceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReferenceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReferenceArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceScalarFieldEnum_1.ReferenceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReferenceArgs.prototype, "distinct", void 0);
FindManyReferenceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyReferenceArgs);
exports.FindManyReferenceArgs = FindManyReferenceArgs;
