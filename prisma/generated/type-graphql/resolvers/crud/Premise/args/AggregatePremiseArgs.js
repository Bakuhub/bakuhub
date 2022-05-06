"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseOrderByWithRelationInput_1 = require("../../../inputs/PremiseOrderByWithRelationInput");
const PremiseWhereInput_1 = require("../../../inputs/PremiseWhereInput");
const PremiseWhereUniqueInput_1 = require("../../../inputs/PremiseWhereUniqueInput");
let AggregatePremiseArgs = class AggregatePremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereInput_1.PremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereInput_1.PremiseWhereInput)
], AggregatePremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseOrderByWithRelationInput_1.PremiseOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePremiseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], AggregatePremiseArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePremiseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePremiseArgs.prototype, "skip", void 0);
AggregatePremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePremiseArgs);
exports.AggregatePremiseArgs = AggregatePremiseArgs;
