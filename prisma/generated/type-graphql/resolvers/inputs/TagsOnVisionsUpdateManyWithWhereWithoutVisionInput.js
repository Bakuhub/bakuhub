"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsUpdateManyWithWhereWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsScalarWhereInput_1 = require("../inputs/TagsOnVisionsScalarWhereInput");
const TagsOnVisionsUpdateManyMutationInput_1 = require("../inputs/TagsOnVisionsUpdateManyMutationInput");
let TagsOnVisionsUpdateManyWithWhereWithoutVisionInput = class TagsOnVisionsUpdateManyWithWhereWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsScalarWhereInput_1.TagsOnVisionsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsScalarWhereInput_1.TagsOnVisionsScalarWhereInput)
], TagsOnVisionsUpdateManyWithWhereWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsUpdateManyMutationInput_1.TagsOnVisionsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsUpdateManyMutationInput_1.TagsOnVisionsUpdateManyMutationInput)
], TagsOnVisionsUpdateManyWithWhereWithoutVisionInput.prototype, "data", void 0);
TagsOnVisionsUpdateManyWithWhereWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsUpdateManyWithWhereWithoutVisionInput", {
        isAbstract: true
    })
], TagsOnVisionsUpdateManyWithWhereWithoutVisionInput);
exports.TagsOnVisionsUpdateManyWithWhereWithoutVisionInput = TagsOnVisionsUpdateManyWithWhereWithoutVisionInput;