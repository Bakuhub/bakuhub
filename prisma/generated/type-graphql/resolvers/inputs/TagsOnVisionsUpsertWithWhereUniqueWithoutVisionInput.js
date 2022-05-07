"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateWithoutVisionInput_1 = require("../inputs/TagsOnVisionsCreateWithoutVisionInput");
const TagsOnVisionsUpdateWithoutVisionInput_1 = require("../inputs/TagsOnVisionsUpdateWithoutVisionInput");
const TagsOnVisionsWhereUniqueInput_1 = require("../inputs/TagsOnVisionsWhereUniqueInput");
let TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput = class TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereUniqueInput_1.TagsOnVisionsWhereUniqueInput)
], TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateWithoutVisionInput_1.TagsOnVisionsUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateWithoutVisionInput_1.TagsOnVisionsUpdateWithoutVisionInput)
], TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCreateWithoutVisionInput_1.TagsOnVisionsCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCreateWithoutVisionInput_1.TagsOnVisionsCreateWithoutVisionInput)
], TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput.prototype, "create", void 0);
TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput", {
        isAbstract: true
    })
], TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput);
exports.TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput = TagsOnVisionsUpsertWithWhereUniqueWithoutVisionInput;
