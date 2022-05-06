"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseWhereInput_1 = require("../../../inputs/PremiseWhereInput");
let DeleteManyPremiseArgs = class DeleteManyPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereInput_1.PremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereInput_1.PremiseWhereInput)
], DeleteManyPremiseArgs.prototype, "where", void 0);
DeleteManyPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPremiseArgs);
exports.DeleteManyPremiseArgs = DeleteManyPremiseArgs;
