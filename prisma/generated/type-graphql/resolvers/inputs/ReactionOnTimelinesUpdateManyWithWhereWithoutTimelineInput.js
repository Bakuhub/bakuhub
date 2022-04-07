"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesScalarWhereInput_1 = require("../inputs/ReactionOnTimelinesScalarWhereInput");
const ReactionOnTimelinesUpdateManyMutationInput_1 = require("../inputs/ReactionOnTimelinesUpdateManyMutationInput");
let ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput = class ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesScalarWhereInput_1.ReactionOnTimelinesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesScalarWhereInput_1.ReactionOnTimelinesScalarWhereInput)
], ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyMutationInput_1.ReactionOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateManyMutationInput_1.ReactionOnTimelinesUpdateManyMutationInput)
], ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput.prototype, "data", void 0);
ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput);
exports.ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput = ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput;
