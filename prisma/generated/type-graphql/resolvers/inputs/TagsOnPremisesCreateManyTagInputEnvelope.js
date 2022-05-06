"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCreateManyTagInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesCreateManyTagInput_1 = require("../inputs/TagsOnPremisesCreateManyTagInput");
let TagsOnPremisesCreateManyTagInputEnvelope = class TagsOnPremisesCreateManyTagInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesCreateManyTagInput_1.TagsOnPremisesCreateManyTagInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesCreateManyTagInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TagsOnPremisesCreateManyTagInputEnvelope.prototype, "skipDuplicates", void 0);
TagsOnPremisesCreateManyTagInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCreateManyTagInputEnvelope", {
        isAbstract: true
    })
], TagsOnPremisesCreateManyTagInputEnvelope);
exports.TagsOnPremisesCreateManyTagInputEnvelope = TagsOnPremisesCreateManyTagInputEnvelope;
