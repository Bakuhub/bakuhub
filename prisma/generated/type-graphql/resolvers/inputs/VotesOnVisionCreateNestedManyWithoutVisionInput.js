"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCreateNestedManyWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateManyVisionInputEnvelope_1 = require("../inputs/VotesOnVisionCreateManyVisionInputEnvelope");
const VotesOnVisionCreateOrConnectWithoutVisionInput_1 = require("../inputs/VotesOnVisionCreateOrConnectWithoutVisionInput");
const VotesOnVisionCreateWithoutVisionInput_1 = require("../inputs/VotesOnVisionCreateWithoutVisionInput");
const VotesOnVisionWhereUniqueInput_1 = require("../inputs/VotesOnVisionWhereUniqueInput");
let VotesOnVisionCreateNestedManyWithoutVisionInput = class VotesOnVisionCreateNestedManyWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateWithoutVisionInput_1.VotesOnVisionCreateWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionCreateNestedManyWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateOrConnectWithoutVisionInput_1.VotesOnVisionCreateOrConnectWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionCreateNestedManyWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateManyVisionInputEnvelope_1.VotesOnVisionCreateManyVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateManyVisionInputEnvelope_1.VotesOnVisionCreateManyVisionInputEnvelope)
], VotesOnVisionCreateNestedManyWithoutVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionCreateNestedManyWithoutVisionInput.prototype, "connect", void 0);
VotesOnVisionCreateNestedManyWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCreateNestedManyWithoutVisionInput", {
        isAbstract: true
    })
], VotesOnVisionCreateNestedManyWithoutVisionInput);
exports.VotesOnVisionCreateNestedManyWithoutVisionInput = VotesOnVisionCreateNestedManyWithoutVisionInput;
