"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsScalarWhereInput_1 = require("../inputs/ReactionOnVisionsScalarWhereInput");
const ReactionOnVisionsUpdateManyMutationInput_1 = require("../inputs/ReactionOnVisionsUpdateManyMutationInput");
let ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput = class ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsScalarWhereInput_1.ReactionOnVisionsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsScalarWhereInput_1.ReactionOnVisionsScalarWhereInput)
], ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyMutationInput_1.ReactionOnVisionsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateManyMutationInput_1.ReactionOnVisionsUpdateManyMutationInput)
], ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput.prototype, "data", void 0);
ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput);
exports.ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput = ReactionOnVisionsUpdateManyWithWhereWithoutVisionInput;
