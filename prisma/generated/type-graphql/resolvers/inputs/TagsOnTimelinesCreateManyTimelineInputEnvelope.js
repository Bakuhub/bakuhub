"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateManyTimelineInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateManyTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateManyTimelineInput");
let TagsOnTimelinesCreateManyTimelineInputEnvelope = class TagsOnTimelinesCreateManyTimelineInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateManyTimelineInput_1.TagsOnTimelinesCreateManyTimelineInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesCreateManyTimelineInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TagsOnTimelinesCreateManyTimelineInputEnvelope.prototype, "skipDuplicates", void 0);
TagsOnTimelinesCreateManyTimelineInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateManyTimelineInputEnvelope", {
        isAbstract: true
    })
], TagsOnTimelinesCreateManyTimelineInputEnvelope);
exports.TagsOnTimelinesCreateManyTimelineInputEnvelope = TagsOnTimelinesCreateManyTimelineInputEnvelope;
