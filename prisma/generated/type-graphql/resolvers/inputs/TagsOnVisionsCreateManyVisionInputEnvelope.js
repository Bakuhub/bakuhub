"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCreateManyVisionInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsCreateManyVisionInput_1 = require("../inputs/TagsOnVisionsCreateManyVisionInput");
let TagsOnVisionsCreateManyVisionInputEnvelope = class TagsOnVisionsCreateManyVisionInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsCreateManyVisionInput_1.TagsOnVisionsCreateManyVisionInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnVisionsCreateManyVisionInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TagsOnVisionsCreateManyVisionInputEnvelope.prototype, "skipDuplicates", void 0);
TagsOnVisionsCreateManyVisionInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCreateManyVisionInputEnvelope", {
        isAbstract: true
    })
], TagsOnVisionsCreateManyVisionInputEnvelope);
exports.TagsOnVisionsCreateManyVisionInputEnvelope = TagsOnVisionsCreateManyVisionInputEnvelope;
