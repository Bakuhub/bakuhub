"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsUpdateWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsUpdateWithoutVisionInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../inputs/ReactionOnVisionsWhereUniqueInput");
let ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput = class ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateWithoutVisionInput_1.ReactionOnVisionsUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateWithoutVisionInput_1.ReactionOnVisionsUpdateWithoutVisionInput)
], ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput.prototype, "data", void 0);
ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput);
exports.ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput = ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput;
