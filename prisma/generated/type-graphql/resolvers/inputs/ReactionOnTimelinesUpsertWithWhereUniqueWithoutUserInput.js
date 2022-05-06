"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesCreateWithoutUserInput");
const ReactionOnTimelinesUpdateWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesUpdateWithoutUserInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../inputs/ReactionOnTimelinesWhereUniqueInput");
let ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput = class ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateWithoutUserInput_1.ReactionOnTimelinesUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateWithoutUserInput_1.ReactionOnTimelinesUpdateWithoutUserInput)
], ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateWithoutUserInput_1.ReactionOnTimelinesCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateWithoutUserInput_1.ReactionOnTimelinesCreateWithoutUserInput)
], ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput);
exports.ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput = ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput;
