"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateManyAuthorInputEnvelope_1 = require("../inputs/PremiseCreateManyAuthorInputEnvelope");
const PremiseCreateOrConnectWithoutAuthorInput_1 = require("../inputs/PremiseCreateOrConnectWithoutAuthorInput");
const PremiseCreateWithoutAuthorInput_1 = require("../inputs/PremiseCreateWithoutAuthorInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateNestedManyWithoutAuthorInput = class PremiseCreateNestedManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseCreateWithoutAuthorInput_1.PremiseCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseCreateOrConnectWithoutAuthorInput_1.PremiseCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateManyAuthorInputEnvelope_1.PremiseCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateManyAuthorInputEnvelope_1.PremiseCreateManyAuthorInputEnvelope)
], PremiseCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseWhereUniqueInput_1.PremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
PremiseCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateNestedManyWithoutAuthorInput", {
        isAbstract: true
    })
], PremiseCreateNestedManyWithoutAuthorInput);
exports.PremiseCreateNestedManyWithoutAuthorInput = PremiseCreateNestedManyWithoutAuthorInput;
