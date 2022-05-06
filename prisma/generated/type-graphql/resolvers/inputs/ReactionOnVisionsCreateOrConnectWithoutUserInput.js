"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateWithoutUserInput_1 = require("../inputs/ReactionOnVisionsCreateWithoutUserInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../inputs/ReactionOnVisionsWhereUniqueInput");
let ReactionOnVisionsCreateOrConnectWithoutUserInput = class ReactionOnVisionsCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput)
], ReactionOnVisionsCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateWithoutUserInput_1.ReactionOnVisionsCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateWithoutUserInput_1.ReactionOnVisionsCreateWithoutUserInput)
], ReactionOnVisionsCreateOrConnectWithoutUserInput.prototype, "create", void 0);
ReactionOnVisionsCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnVisionsCreateOrConnectWithoutUserInput);
exports.ReactionOnVisionsCreateOrConnectWithoutUserInput = ReactionOnVisionsCreateOrConnectWithoutUserInput;
