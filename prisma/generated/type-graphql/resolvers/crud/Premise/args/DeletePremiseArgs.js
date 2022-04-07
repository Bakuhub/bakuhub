"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseWhereUniqueInput_1 = require("../../../inputs/PremiseWhereUniqueInput");
let DeletePremiseArgs = class DeletePremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], DeletePremiseArgs.prototype, "where", void 0);
DeletePremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeletePremiseArgs);
exports.DeletePremiseArgs = DeletePremiseArgs;
