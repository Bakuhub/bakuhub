"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateManyUserInputEnvelope_1 = require("../inputs/VotesOnThreadCreateManyUserInputEnvelope");
const VotesOnThreadCreateOrConnectWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateOrConnectWithoutUserInput");
const VotesOnThreadCreateWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateWithoutUserInput");
const VotesOnThreadWhereUniqueInput_1 = require("../inputs/VotesOnThreadWhereUniqueInput");
let VotesOnThreadCreateNestedManyWithoutUserInput = class VotesOnThreadCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateWithoutUserInput_1.VotesOnThreadCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateOrConnectWithoutUserInput_1.VotesOnThreadCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateManyUserInputEnvelope_1.VotesOnThreadCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateManyUserInputEnvelope_1.VotesOnThreadCreateManyUserInputEnvelope)
], VotesOnThreadCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
VotesOnThreadCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], VotesOnThreadCreateNestedManyWithoutUserInput);
exports.VotesOnThreadCreateNestedManyWithoutUserInput = VotesOnThreadCreateNestedManyWithoutUserInput;
