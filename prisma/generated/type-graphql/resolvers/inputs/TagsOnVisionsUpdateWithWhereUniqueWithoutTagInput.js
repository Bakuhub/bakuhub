"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsUpdateWithoutTagInput_1 = require("../inputs/TagsOnVisionsUpdateWithoutTagInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../inputs/TagsOnVisionsWhereUniqueInput");
let TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput = class TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateWithoutTagInput_1.TagsOnVisionsUpdateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateWithoutTagInput_1.TagsOnVisionsUpdateWithoutTagInput)
], TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput.prototype, "data", void 0);
TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput", {
        isAbstract: true
    })
], TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput);
exports.TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput = TagsOnVisionsUpdateWithWhereUniqueWithoutTagInput;
