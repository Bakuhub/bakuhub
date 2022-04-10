"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineScalarWhereInput_1 = require("../inputs/VotesOnTimelineScalarWhereInput");
const VotesOnTimelineUpdateManyMutationInput_1 = require("../inputs/VotesOnTimelineUpdateManyMutationInput");
let VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput = class VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineScalarWhereInput_1.VotesOnTimelineScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineScalarWhereInput_1.VotesOnTimelineScalarWhereInput)
], VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyMutationInput_1.VotesOnTimelineUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateManyMutationInput_1.VotesOnTimelineUpdateManyMutationInput)
], VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput.prototype, "data", void 0);
VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput", {
        isAbstract: true
    })
], VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput);
exports.VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput = VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput;
