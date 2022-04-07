"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseUpdateWithoutAuthorInput_1 = require("../inputs/PremiseUpdateWithoutAuthorInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseUpdateWithWhereUniqueWithoutAuthorInput = class PremiseUpdateWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutAuthorInput_1.PremiseUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutAuthorInput_1.PremiseUpdateWithoutAuthorInput)
], PremiseUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
PremiseUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], PremiseUpdateWithWhereUniqueWithoutAuthorInput);
exports.PremiseUpdateWithWhereUniqueWithoutAuthorInput = PremiseUpdateWithWhereUniqueWithoutAuthorInput;
