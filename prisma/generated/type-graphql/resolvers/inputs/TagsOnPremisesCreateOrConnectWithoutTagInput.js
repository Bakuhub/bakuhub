"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateOrConnectWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateWithoutTagInput_1 = require("../inputs/TagsOnPremisesCreateWithoutTagInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../inputs/TagsOnPremisesWhereUniqueInput");
let TagsOnPremisesCreateOrConnectWithoutTagInput = class TagsOnPremisesCreateOrConnectWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput)
], TagsOnPremisesCreateOrConnectWithoutTagInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateWithoutTagInput_1.TagsOnPremisesCreateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateWithoutTagInput_1.TagsOnPremisesCreateWithoutTagInput)
], TagsOnPremisesCreateOrConnectWithoutTagInput.prototype, "create", void 0);
TagsOnPremisesCreateOrConnectWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateOrConnectWithoutTagInput", {
        isAbstract: true
    })
], TagsOnPremisesCreateOrConnectWithoutTagInput);
exports.TagsOnPremisesCreateOrConnectWithoutTagInput = TagsOnPremisesCreateOrConnectWithoutTagInput;
