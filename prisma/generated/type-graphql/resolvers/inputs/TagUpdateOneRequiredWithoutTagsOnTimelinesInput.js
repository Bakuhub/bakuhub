"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateOneRequiredWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateOrConnectWithoutTagsOnTimelinesInput_1 = require("../inputs/TagCreateOrConnectWithoutTagsOnTimelinesInput");
const TagCreateWithoutTagsOnTimelinesInput_1 = require("../inputs/TagCreateWithoutTagsOnTimelinesInput");
const TagUpdateWithoutTagsOnTimelinesInput_1 = require("../inputs/TagUpdateWithoutTagsOnTimelinesInput");
const TagUpsertWithoutTagsOnTimelinesInput_1 = require("../inputs/TagUpsertWithoutTagsOnTimelinesInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagUpdateOneRequiredWithoutTagsOnTimelinesInput = class TagUpdateOneRequiredWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTagsOnTimelinesInput_1.TagCreateWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTagsOnTimelinesInput_1.TagCreateWithoutTagsOnTimelinesInput)
], TagUpdateOneRequiredWithoutTagsOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnTimelinesInput_1.TagCreateOrConnectWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateOrConnectWithoutTagsOnTimelinesInput_1.TagCreateOrConnectWithoutTagsOnTimelinesInput)
], TagUpdateOneRequiredWithoutTagsOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpsertWithoutTagsOnTimelinesInput_1.TagUpsertWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpsertWithoutTagsOnTimelinesInput_1.TagUpsertWithoutTagsOnTimelinesInput)
], TagUpdateOneRequiredWithoutTagsOnTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagUpdateOneRequiredWithoutTagsOnTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateWithoutTagsOnTimelinesInput_1.TagUpdateWithoutTagsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpdateWithoutTagsOnTimelinesInput_1.TagUpdateWithoutTagsOnTimelinesInput)
], TagUpdateOneRequiredWithoutTagsOnTimelinesInput.prototype, "update", void 0);
TagUpdateOneRequiredWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateOneRequiredWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TagUpdateOneRequiredWithoutTagsOnTimelinesInput);
exports.TagUpdateOneRequiredWithoutTagsOnTimelinesInput = TagUpdateOneRequiredWithoutTagsOnTimelinesInput;
