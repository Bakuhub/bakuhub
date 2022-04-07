"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseUpdateInput_1 = require("../../../inputs/PremiseUpdateInput");
const PremiseWhereUniqueInput_1 = require("../../../inputs/PremiseWhereUniqueInput");
let UpdatePremiseArgs = class UpdatePremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateInput_1.PremiseUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateInput_1.PremiseUpdateInput)
], UpdatePremiseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], UpdatePremiseArgs.prototype, "where", void 0);
UpdatePremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdatePremiseArgs);
exports.UpdatePremiseArgs = UpdatePremiseArgs;
