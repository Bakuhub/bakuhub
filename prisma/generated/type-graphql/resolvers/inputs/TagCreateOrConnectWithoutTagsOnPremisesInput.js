"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateOrConnectWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateWithoutTagsOnPremisesInput_1 = require("../inputs/TagCreateWithoutTagsOnPremisesInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagCreateOrConnectWithoutTagsOnPremisesInput = class TagCreateOrConnectWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagCreateOrConnectWithoutTagsOnPremisesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnPremisesInput_1.TagCreateWithoutTagsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnPremisesInput_1.TagCreateWithoutTagsOnPremisesInput)
], TagCreateOrConnectWithoutTagsOnPremisesInput.prototype, "create", void 0);
TagCreateOrConnectWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateOrConnectWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], TagCreateOrConnectWithoutTagsOnPremisesInput);
exports.TagCreateOrConnectWithoutTagsOnPremisesInput = TagCreateOrConnectWithoutTagsOnPremisesInput;
