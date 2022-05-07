"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateWithoutTagInput_1 = require("../inputs/TagsOnVisionsCreateWithoutTagInput");
const TagsOnVisionsUpdateWithoutTagInput_1 = require("../inputs/TagsOnVisionsUpdateWithoutTagInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../inputs/TagsOnVisionsWhereUniqueInput");
let TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput = class TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateWithoutTagInput_1.TagsOnVisionsUpdateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateWithoutTagInput_1.TagsOnVisionsUpdateWithoutTagInput)
], TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateWithoutTagInput_1.TagsOnVisionsCreateWithoutTagInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateWithoutTagInput_1.TagsOnVisionsCreateWithoutTagInput)
], TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput.prototype, "create", void 0);
TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput", {
        isAbstract: true
    })
], TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput);
exports.TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput = TagsOnVisionsUpsertWithWhereUniqueWithoutTagInput;
