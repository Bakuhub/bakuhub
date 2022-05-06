"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateNestedManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateManyTimelineInputEnvelope_1 = require("../inputs/VotesOnTimelineCreateManyTimelineInputEnvelope");
const VotesOnTimelineCreateOrConnectWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateOrConnectWithoutTimelineInput");
const VotesOnTimelineCreateWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateWithoutTimelineInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../inputs/VotesOnTimelineWhereUniqueInput");
let VotesOnTimelineCreateNestedManyWithoutTimelineInput = class VotesOnTimelineCreateNestedManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateWithoutTimelineInput_1.VotesOnTimelineCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineCreateNestedManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateOrConnectWithoutTimelineInput_1.VotesOnTimelineCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineCreateNestedManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateManyTimelineInputEnvelope_1.VotesOnTimelineCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateManyTimelineInputEnvelope_1.VotesOnTimelineCreateManyTimelineInputEnvelope)
], VotesOnTimelineCreateNestedManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineCreateNestedManyWithoutTimelineInput.prototype, "connect", void 0);
VotesOnTimelineCreateNestedManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateNestedManyWithoutTimelineInput", {
        isAbstract: true
    })
], VotesOnTimelineCreateNestedManyWithoutTimelineInput);
exports.VotesOnTimelineCreateNestedManyWithoutTimelineInput = VotesOnTimelineCreateNestedManyWithoutTimelineInput;
