"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutAuthorInput_1 = require("../inputs/PremiseCreateWithoutAuthorInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateOrConnectWithoutAuthorInput = class PremiseCreateOrConnectWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutAuthorInput_1.PremiseCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutAuthorInput_1.PremiseCreateWithoutAuthorInput)
], PremiseCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
PremiseCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateOrConnectWithoutAuthorInput", {
        isAbstract: true
    })
], PremiseCreateOrConnectWithoutAuthorInput);
exports.PremiseCreateOrConnectWithoutAuthorInput = PremiseCreateOrConnectWithoutAuthorInput;
