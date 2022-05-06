"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesUpdateManyWithWhereWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesScalarWhereInput_1 = require("../inputs/TagsOnPremisesScalarWhereInput");
const TagsOnPremisesUpdateManyMutationInput_1 = require("../inputs/TagsOnPremisesUpdateManyMutationInput");
let TagsOnPremisesUpdateManyWithWhereWithoutTagInput = class TagsOnPremisesUpdateManyWithWhereWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesScalarWhereInput_1.TagsOnPremisesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesScalarWhereInput_1.TagsOnPremisesScalarWhereInput)
], TagsOnPremisesUpdateManyWithWhereWithoutTagInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyMutationInput_1.TagsOnPremisesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesUpdateManyMutationInput_1.TagsOnPremisesUpdateManyMutationInput)
], TagsOnPremisesUpdateManyWithWhereWithoutTagInput.prototype, "data", void 0);
TagsOnPremisesUpdateManyWithWhereWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesUpdateManyWithWhereWithoutTagInput", {
        isAbstract: true
    })
], TagsOnPremisesUpdateManyWithWhereWithoutTagInput);
exports.TagsOnPremisesUpdateManyWithWhereWithoutTagInput = TagsOnPremisesUpdateManyWithWhereWithoutTagInput;
