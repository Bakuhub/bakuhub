"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsUpdateWithoutUserInput_1 = require("../inputs/ReactionOnVisionsUpdateWithoutUserInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../inputs/ReactionOnVisionsWhereUniqueInput");
let ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput = class ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateWithoutUserInput_1.ReactionOnVisionsUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateWithoutUserInput_1.ReactionOnVisionsUpdateWithoutUserInput)
], ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput);
exports.ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput = ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput;
