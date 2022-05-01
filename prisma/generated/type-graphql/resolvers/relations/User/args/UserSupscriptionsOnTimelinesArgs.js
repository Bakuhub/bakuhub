"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSupscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesOrderByWithRelationInput_1 = require("../../../inputs/SupscriptionsOnTimelinesOrderByWithRelationInput");
const SupscriptionsOnTimelinesWhereInput_1 = require("../../../inputs/SupscriptionsOnTimelinesWhereInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../../../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
const SupscriptionsOnTimelinesScalarFieldEnum_1 = require("../../../../enums/SupscriptionsOnTimelinesScalarFieldEnum");
let UserSupscriptionsOnTimelinesArgs = class UserSupscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput)
], UserSupscriptionsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesOrderByWithRelationInput_1.SupscriptionsOnTimelinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserSupscriptionsOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], UserSupscriptionsOnTimelinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserSupscriptionsOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserSupscriptionsOnTimelinesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesScalarFieldEnum_1.SupscriptionsOnTimelinesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserSupscriptionsOnTimelinesArgs.prototype, "distinct", void 0);
UserSupscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserSupscriptionsOnTimelinesArgs);
exports.UserSupscriptionsOnTimelinesArgs = UserSupscriptionsOnTimelinesArgs;
