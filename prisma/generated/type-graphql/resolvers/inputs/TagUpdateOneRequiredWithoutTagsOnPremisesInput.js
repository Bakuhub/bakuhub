"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateOneRequiredWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateOrConnectWithoutTagsOnPremisesInput_1 = require("../inputs/TagCreateOrConnectWithoutTagsOnPremisesInput");
const TagCreateWithoutTagsOnPremisesInput_1 = require("../inputs/TagCreateWithoutTagsOnPremisesInput");
const TagUpdateWithoutTagsOnPremisesInput_1 = require("../inputs/TagUpdateWithoutTagsOnPremisesInput");
const TagUpsertWithoutTagsOnPremisesInput_1 = require("../inputs/TagUpsertWithoutTagsOnPremisesInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagUpdateOneRequiredWithoutTagsOnPremisesInput = class TagUpdateOneRequiredWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnPremisesInput_1.TagCreateWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnPremisesInput_1.TagCreateWithoutTagsOnPremisesInput)
], TagUpdateOneRequiredWithoutTagsOnPremisesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnPremisesInput_1.TagCreateOrConnectWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateOrConnectWithoutTagsOnPremisesInput_1.TagCreateOrConnectWithoutTagsOnPremisesInput)
], TagUpdateOneRequiredWithoutTagsOnPremisesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpsertWithoutTagsOnPremisesInput_1.TagUpsertWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpsertWithoutTagsOnPremisesInput_1.TagUpsertWithoutTagsOnPremisesInput)
], TagUpdateOneRequiredWithoutTagsOnPremisesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagUpdateOneRequiredWithoutTagsOnPremisesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateWithoutTagsOnPremisesInput_1.TagUpdateWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpdateWithoutTagsOnPremisesInput_1.TagUpdateWithoutTagsOnPremisesInput)
], TagUpdateOneRequiredWithoutTagsOnPremisesInput.prototype, "update", void 0);
TagUpdateOneRequiredWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateOneRequiredWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], TagUpdateOneRequiredWithoutTagsOnPremisesInput);
exports.TagUpdateOneRequiredWithoutTagsOnPremisesInput = TagUpdateOneRequiredWithoutTagsOnPremisesInput;
