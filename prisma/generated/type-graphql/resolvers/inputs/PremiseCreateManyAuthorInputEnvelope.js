"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateManyAuthorInput_1 = require("../inputs/PremiseCreateManyAuthorInput");
let PremiseCreateManyAuthorInputEnvelope = class PremiseCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseCreateManyAuthorInput_1.PremiseCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseCreateManyAuthorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PremiseCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
PremiseCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateManyAuthorInputEnvelope", {
        isAbstract: true
    })
], PremiseCreateManyAuthorInputEnvelope);
exports.PremiseCreateManyAuthorInputEnvelope = PremiseCreateManyAuthorInputEnvelope;
