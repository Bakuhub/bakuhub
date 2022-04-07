"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutAuthorInput_1 = require("../inputs/PremiseCreateWithoutAuthorInput");
const PremiseUpdateWithoutAuthorInput_1 = require("../inputs/PremiseUpdateWithoutAuthorInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseUpsertWithWhereUniqueWithoutAuthorInput = class PremiseUpsertWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutAuthorInput_1.PremiseUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutAuthorInput_1.PremiseUpdateWithoutAuthorInput)
], PremiseUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutAuthorInput_1.PremiseCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutAuthorInput_1.PremiseCreateWithoutAuthorInput)
], PremiseUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
PremiseUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpsertWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], PremiseUpsertWithWhereUniqueWithoutAuthorInput);
exports.PremiseUpsertWithWhereUniqueWithoutAuthorInput = PremiseUpsertWithWhereUniqueWithoutAuthorInput;
