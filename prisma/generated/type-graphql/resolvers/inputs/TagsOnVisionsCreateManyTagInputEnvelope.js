"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateManyTagInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateManyTagInput_1 = require("../inputs/TagsOnVisionsCreateManyTagInput");
let TagsOnVisionsCreateManyTagInputEnvelope = class TagsOnVisionsCreateManyTagInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateManyTagInput_1.TagsOnVisionsCreateManyTagInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsCreateManyTagInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TagsOnVisionsCreateManyTagInputEnvelope.prototype, "skipDuplicates", void 0);
TagsOnVisionsCreateManyTagInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateManyTagInputEnvelope", {
        isAbstract: true
    })
], TagsOnVisionsCreateManyTagInputEnvelope);
exports.TagsOnVisionsCreateManyTagInputEnvelope = TagsOnVisionsCreateManyTagInputEnvelope;
