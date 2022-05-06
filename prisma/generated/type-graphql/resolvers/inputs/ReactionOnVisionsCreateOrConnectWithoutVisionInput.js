"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateOrConnectWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsCreateWithoutVisionInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../inputs/ReactionOnVisionsWhereUniqueInput");
let ReactionOnVisionsCreateOrConnectWithoutVisionInput = class ReactionOnVisionsCreateOrConnectWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], ReactionOnVisionsCreateOrConnectWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateWithoutVisionInput_1.ReactionOnVisionsCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateWithoutVisionInput_1.ReactionOnVisionsCreateWithoutVisionInput)
], ReactionOnVisionsCreateOrConnectWithoutVisionInput.prototype, "create", void 0);
ReactionOnVisionsCreateOrConnectWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateOrConnectWithoutVisionInput", {
        isAbstract: true
    })
], ReactionOnVisionsCreateOrConnectWithoutVisionInput);
exports.ReactionOnVisionsCreateOrConnectWithoutVisionInput = ReactionOnVisionsCreateOrConnectWithoutVisionInput;
