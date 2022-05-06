"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsCreateWithoutVisionInput");
const ReactionOnVisionsUpdateWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsUpdateWithoutVisionInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../inputs/ReactionOnVisionsWhereUniqueInput");
let ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput = class ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateWithoutVisionInput_1.ReactionOnVisionsUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateWithoutVisionInput_1.ReactionOnVisionsUpdateWithoutVisionInput)
], ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateWithoutVisionInput_1.ReactionOnVisionsCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateWithoutVisionInput_1.ReactionOnVisionsCreateWithoutVisionInput)
], ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput.prototype, "create", void 0);
ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput);
exports.ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput = ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput;
