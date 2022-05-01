"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesScalarWhereInput_1 = require("../inputs/SupscriptionsOnTimelinesScalarWhereInput");
const SupscriptionsOnTimelinesUpdateManyMutationInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateManyMutationInput");
let SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput = class SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesScalarWhereInput_1.SupscriptionsOnTimelinesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesScalarWhereInput_1.SupscriptionsOnTimelinesScalarWhereInput)
], SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUpdateManyMutationInput_1.SupscriptionsOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUpdateManyMutationInput_1.SupscriptionsOnTimelinesUpdateManyMutationInput)
], SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput);
exports.SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput = SupscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput;
