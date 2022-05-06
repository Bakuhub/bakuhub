"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PremiseWhereUniqueInput = class PremiseWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PremiseWhereUniqueInput.prototype, "id", void 0);
PremiseWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseWhereUniqueInput", {
        isAbstract: true
    })
], PremiseWhereUniqueInput);
exports.PremiseWhereUniqueInput = PremiseWhereUniqueInput;
