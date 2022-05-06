"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateManyInput_1 = require("../../../inputs/PremiseCreateManyInput");
let CreateManyPremiseArgs = class CreateManyPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseCreateManyInput_1.PremiseCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPremiseArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPremiseArgs.prototype, "skipDuplicates", void 0);
CreateManyPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPremiseArgs);
exports.CreateManyPremiseArgs = CreateManyPremiseArgs;
