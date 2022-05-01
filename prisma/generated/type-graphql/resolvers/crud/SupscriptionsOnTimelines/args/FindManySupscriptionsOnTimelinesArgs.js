"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySupscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesOrderByWithRelationInput_1 = require("../../../inputs/SupscriptionsOnTimelinesOrderByWithRelationInput");
const SupscriptionsOnTimelinesWhereInput_1 = require("../../../inputs/SupscriptionsOnTimelinesWhereInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
const SupscriptionsOnTimelinesScalarFieldEnum_1 = require("../../../../enums/SupscriptionsOnTimelinesScalarFieldEnum");
let FindManySupscriptionsOnTimelinesArgs = class FindManySupscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput)
], FindManySupscriptionsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesOrderByWithRelationInput_1.SupscriptionsOnTimelinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySupscriptionsOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], FindManySupscriptionsOnTimelinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySupscriptionsOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySupscriptionsOnTimelinesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesScalarFieldEnum_1.SupscriptionsOnTimelinesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySupscriptionsOnTimelinesArgs.prototype, "distinct", void 0);
FindManySupscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySupscriptionsOnTimelinesArgs);
exports.FindManySupscriptionsOnTimelinesArgs = FindManySupscriptionsOnTimelinesArgs;
