"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateNestedManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateManyTimelineInputEnvelope_1 = require("../inputs/TagsOnTimelinesCreateManyTimelineInputEnvelope");
const TagsOnTimelinesCreateOrConnectWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateOrConnectWithoutTimelineInput");
const TagsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateWithoutTimelineInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../inputs/TagsOnTimelinesWhereUniqueInput");
let TagsOnTimelinesCreateNestedManyWithoutTimelineInput = class TagsOnTimelinesCreateNestedManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateWithoutTimelineInput_1.TagsOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesCreateOrConnectWithoutTimelineInput_1.TagsOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateManyTimelineInputEnvelope_1.TagsOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateManyTimelineInputEnvelope_1.TagsOnTimelinesCreateManyTimelineInputEnvelope)
], TagsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnTimelinesCreateNestedManyWithoutTimelineInput.prototype, "connect", void 0);
TagsOnTimelinesCreateNestedManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateNestedManyWithoutTimelineInput", {
        isAbstract: true
    })
], TagsOnTimelinesCreateNestedManyWithoutTimelineInput);
exports.TagsOnTimelinesCreateNestedManyWithoutTimelineInput = TagsOnTimelinesCreateNestedManyWithoutTimelineInput;
