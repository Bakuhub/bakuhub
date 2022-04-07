"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesScalarWhereInput_1 = require("../inputs/TagsOnTimelinesScalarWhereInput");
const TagsOnTimelinesUpdateManyMutationInput_1 = require("../inputs/TagsOnTimelinesUpdateManyMutationInput");
let TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = class TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesScalarWhereInput_1.TagsOnTimelinesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesScalarWhereInput_1.TagsOnTimelinesScalarWhereInput)
], TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyMutationInput_1.TagsOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateManyMutationInput_1.TagsOnTimelinesUpdateManyMutationInput)
], TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput.prototype, "data", void 0);
TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput", {
        isAbstract: true
    })
], TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput);
exports.TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput = TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput;
