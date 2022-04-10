"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateWithoutUserInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../inputs/VotesOnTimelineWhereUniqueInput");
let VotesOnTimelineCreateOrConnectWithoutUserInput = class VotesOnTimelineCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], VotesOnTimelineCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateWithoutUserInput_1.VotesOnTimelineCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateWithoutUserInput_1.VotesOnTimelineCreateWithoutUserInput)
], VotesOnTimelineCreateOrConnectWithoutUserInput.prototype, "create", void 0);
VotesOnTimelineCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], VotesOnTimelineCreateOrConnectWithoutUserInput);
exports.VotesOnTimelineCreateOrConnectWithoutUserInput = VotesOnTimelineCreateOrConnectWithoutUserInput;
