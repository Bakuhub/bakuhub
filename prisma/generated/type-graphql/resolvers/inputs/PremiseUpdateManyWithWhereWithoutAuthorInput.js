"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseScalarWhereInput_1 = require("../inputs/PremiseScalarWhereInput");
const PremiseUpdateManyMutationInput_1 = require("../inputs/PremiseUpdateManyMutationInput");
let PremiseUpdateManyWithWhereWithoutAuthorInput = class PremiseUpdateManyWithWhereWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseScalarWhereInput_1.PremiseScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseScalarWhereInput_1.PremiseScalarWhereInput)
], PremiseUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateManyMutationInput_1.PremiseUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateManyMutationInput_1.PremiseUpdateManyMutationInput)
], PremiseUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
PremiseUpdateManyWithWhereWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateManyWithWhereWithoutAuthorInput", {
        isAbstract: true
    })
], PremiseUpdateManyWithWhereWithoutAuthorInput);
exports.PremiseUpdateManyWithWhereWithoutAuthorInput = PremiseUpdateManyWithWhereWithoutAuthorInput;
