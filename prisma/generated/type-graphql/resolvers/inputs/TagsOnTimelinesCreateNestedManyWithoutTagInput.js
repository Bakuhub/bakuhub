"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateNestedManyWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateManyTagInputEnvelope_1 = require("../inputs/TagsOnTimelinesCreateManyTagInputEnvelope");
const TagsOnTimelinesCreateOrConnectWithoutTagInput_1 = require("../inputs/TagsOnTimelinesCreateOrConnectWithoutTagInput");
const TagsOnTimelinesCreateWithoutTagInput_1 = require("../inputs/TagsOnTimelinesCreateWithoutTagInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../inputs/TagsOnTimelinesWhereUniqueInput");
let TagsOnTimelinesCreateNestedManyWithoutTagInput = class TagsOnTimelinesCreateNestedManyWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateWithoutTagInput_1.TagsOnTimelinesCreateWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesCreateNestedManyWithoutTagInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateOrConnectWithoutTagInput_1.TagsOnTimelinesCreateOrConnectWithoutTagInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesCreateNestedManyWithoutTagInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateManyTagInputEnvelope_1.TagsOnTimelinesCreateManyTagInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateManyTagInputEnvelope_1.TagsOnTimelinesCreateManyTagInputEnvelope)
], TagsOnTimelinesCreateNestedManyWithoutTagInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesCreateNestedManyWithoutTagInput.prototype, "connect", void 0);
TagsOnTimelinesCreateNestedManyWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateNestedManyWithoutTagInput", {
        isAbstract: true
    })
], TagsOnTimelinesCreateNestedManyWithoutTagInput);
exports.TagsOnTimelinesCreateNestedManyWithoutTagInput = TagsOnTimelinesCreateNestedManyWithoutTagInput;
