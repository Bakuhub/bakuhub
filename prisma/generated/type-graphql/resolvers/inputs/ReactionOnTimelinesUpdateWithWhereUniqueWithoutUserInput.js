"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesUpdateWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesUpdateWithoutUserInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../inputs/ReactionOnTimelinesWhereUniqueInput");
let ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput = class ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateWithoutUserInput_1.ReactionOnTimelinesUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateWithoutUserInput_1.ReactionOnTimelinesUpdateWithoutUserInput)
], ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput);
exports.ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput = ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput;
