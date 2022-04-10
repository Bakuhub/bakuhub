"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateOrConnectWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateWithoutTimelineInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../inputs/VotesOnTimelineWhereUniqueInput");
let VotesOnTimelineCreateOrConnectWithoutTimelineInput = class VotesOnTimelineCreateOrConnectWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], VotesOnTimelineCreateOrConnectWithoutTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateWithoutTimelineInput_1.VotesOnTimelineCreateWithoutTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateWithoutTimelineInput_1.VotesOnTimelineCreateWithoutTimelineInput)
], VotesOnTimelineCreateOrConnectWithoutTimelineInput.prototype, "create", void 0);
VotesOnTimelineCreateOrConnectWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateOrConnectWithoutTimelineInput", {
        isAbstract: true
    })
], VotesOnTimelineCreateOrConnectWithoutTimelineInput);
exports.VotesOnTimelineCreateOrConnectWithoutTimelineInput = VotesOnTimelineCreateOrConnectWithoutTimelineInput;
