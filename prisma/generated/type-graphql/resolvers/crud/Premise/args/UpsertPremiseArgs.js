"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateInput_1 = require("../../../inputs/PremiseCreateInput");
const PremiseUpdateInput_1 = require("../../../inputs/PremiseUpdateInput");
const PremiseWhereUniqueInput_1 = require("../../../inputs/PremiseWhereUniqueInput");
let UpsertPremiseArgs = class UpsertPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], UpsertPremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateInput_1.PremiseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateInput_1.PremiseCreateInput)
], UpsertPremiseArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateInput_1.PremiseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateInput_1.PremiseUpdateInput)
], UpsertPremiseArgs.prototype, "update", void 0);
UpsertPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertPremiseArgs);
exports.UpsertPremiseArgs = UpsertPremiseArgs;
