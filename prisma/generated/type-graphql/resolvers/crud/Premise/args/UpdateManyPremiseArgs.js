"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseUpdateManyMutationInput_1 = require("../../../inputs/PremiseUpdateManyMutationInput");
const PremiseWhereInput_1 = require("../../../inputs/PremiseWhereInput");
let UpdateManyPremiseArgs = class UpdateManyPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateManyMutationInput_1.PremiseUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateManyMutationInput_1.PremiseUpdateManyMutationInput)
], UpdateManyPremiseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereInput_1.PremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereInput_1.PremiseWhereInput)
], UpdateManyPremiseArgs.prototype, "where", void 0);
UpdateManyPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPremiseArgs);
exports.UpdateManyPremiseArgs = UpdateManyPremiseArgs;
