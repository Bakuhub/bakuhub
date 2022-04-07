"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateNestedManyWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateManyTagInputEnvelope_1 = require("../inputs/TagsOnPremisesCreateManyTagInputEnvelope");
const TagsOnPremisesCreateOrConnectWithoutTagInput_1 = require("../inputs/TagsOnPremisesCreateOrConnectWithoutTagInput");
const TagsOnPremisesCreateWithoutTagInput_1 = require("../inputs/TagsOnPremisesCreateWithoutTagInput");
const TagsOnPremisesWhereUniqueInput_1 = require("../inputs/TagsOnPremisesWhereUniqueInput");
let TagsOnPremisesCreateNestedManyWithoutTagInput = class TagsOnPremisesCreateNestedManyWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateWithoutTagInput_1.TagsOnPremisesCreateWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesCreateNestedManyWithoutTagInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateOrConnectWithoutTagInput_1.TagsOnPremisesCreateOrConnectWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesCreateNestedManyWithoutTagInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCreateManyTagInputEnvelope_1.TagsOnPremisesCreateManyTagInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCreateManyTagInputEnvelope_1.TagsOnPremisesCreateManyTagInputEnvelope)
], TagsOnPremisesCreateNestedManyWithoutTagInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput_1.TagsOnPremisesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesCreateNestedManyWithoutTagInput.prototype, "connect", void 0);
TagsOnPremisesCreateNestedManyWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateNestedManyWithoutTagInput", {
        isAbstract: true
    })
], TagsOnPremisesCreateNestedManyWithoutTagInput);
exports.TagsOnPremisesCreateNestedManyWithoutTagInput = TagsOnPremisesCreateNestedManyWithoutTagInput;
