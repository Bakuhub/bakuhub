"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryCreateManyUserInput_1 = require("../inputs/VisionViewsHistoryCreateManyUserInput");
let VisionViewsHistoryCreateManyUserInputEnvelope = class VisionViewsHistoryCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryCreateManyUserInput_1.VisionViewsHistoryCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], VisionViewsHistoryCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], VisionViewsHistoryCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
VisionViewsHistoryCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], VisionViewsHistoryCreateManyUserInputEnvelope);
exports.VisionViewsHistoryCreateManyUserInputEnvelope = VisionViewsHistoryCreateManyUserInputEnvelope;
