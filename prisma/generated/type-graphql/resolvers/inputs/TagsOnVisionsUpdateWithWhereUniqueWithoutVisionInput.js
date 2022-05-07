"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsUpdateWithoutVisionInput_1 = require("../inputs/TagsOnVisionsUpdateWithoutVisionInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../inputs/TagsOnVisionsWhereUniqueInput");
let TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput = class TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateWithoutVisionInput_1.TagsOnVisionsUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateWithoutVisionInput_1.TagsOnVisionsUpdateWithoutVisionInput)
], TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput.prototype, "data", void 0);
TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput", {
        isAbstract: true
    })
], TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput);
exports.TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput = TagsOnVisionsUpdateWithWhereUniqueWithoutVisionInput;
