"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateWithoutUserInput_1 = require("../inputs/ReactionOnVisionsCreateWithoutUserInput");
const ReactionOnVisionsUpdateWithoutUserInput_1 = require("../inputs/ReactionOnVisionsUpdateWithoutUserInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../inputs/ReactionOnVisionsWhereUniqueInput");
let ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput = class ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateWithoutUserInput_1.ReactionOnVisionsUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateWithoutUserInput_1.ReactionOnVisionsUpdateWithoutUserInput)
], ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateWithoutUserInput_1.ReactionOnVisionsCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateWithoutUserInput_1.ReactionOnVisionsCreateWithoutUserInput)
], ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput);
exports.ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput = ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput;
