"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesCreateWithoutUserInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../inputs/ReactionOnTimelinesWhereUniqueInput");
let ReactionOnTimelinesCreateOrConnectWithoutUserInput = class ReactionOnTimelinesCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput)
], ReactionOnTimelinesCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateWithoutUserInput_1.ReactionOnTimelinesCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateWithoutUserInput_1.ReactionOnTimelinesCreateWithoutUserInput)
], ReactionOnTimelinesCreateOrConnectWithoutUserInput.prototype, "create", void 0);
ReactionOnTimelinesCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateOrConnectWithoutUserInput);
exports.ReactionOnTimelinesCreateOrConnectWithoutUserInput = ReactionOnTimelinesCreateOrConnectWithoutUserInput;
