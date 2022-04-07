"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateManyTagInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateManyTagInput_1 = require("../inputs/TagsOnTimelinesCreateManyTagInput");
let TagsOnTimelinesCreateManyTagInputEnvelope = class TagsOnTimelinesCreateManyTagInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateManyTagInput_1.TagsOnTimelinesCreateManyTagInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesCreateManyTagInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TagsOnTimelinesCreateManyTagInputEnvelope.prototype, "skipDuplicates", void 0);
TagsOnTimelinesCreateManyTagInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateManyTagInputEnvelope", {
        isAbstract: true
    })
], TagsOnTimelinesCreateManyTagInputEnvelope);
exports.TagsOnTimelinesCreateManyTagInputEnvelope = TagsOnTimelinesCreateManyTagInputEnvelope;
