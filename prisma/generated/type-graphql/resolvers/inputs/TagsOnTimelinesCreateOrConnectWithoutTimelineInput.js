"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCreateOrConnectWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesCreateWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateWithoutTimelineInput");
const TagsOnTimelinesWhereUniqueInput_1 = require("../inputs/TagsOnTimelinesWhereUniqueInput");
let TagsOnTimelinesCreateOrConnectWithoutTimelineInput = class TagsOnTimelinesCreateOrConnectWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereUniqueInput_1.TagsOnTimelinesWhereUniqueInput)
], TagsOnTimelinesCreateOrConnectWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateWithoutTimelineInput_1.TagsOnTimelinesCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateWithoutTimelineInput_1.TagsOnTimelinesCreateWithoutTimelineInput)
], TagsOnTimelinesCreateOrConnectWithoutTimelineInput.prototype, "create", void 0);
TagsOnTimelinesCreateOrConnectWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCreateOrConnectWithoutTimelineInput", {
        isAbstract: true
    })
], TagsOnTimelinesCreateOrConnectWithoutTimelineInput);
exports.TagsOnTimelinesCreateOrConnectWithoutTimelineInput = TagsOnTimelinesCreateOrConnectWithoutTimelineInput;
