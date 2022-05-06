"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PremisesOnTimelinesCreateManyInput = class PremisesOnTimelinesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesCreateManyInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PremisesOnTimelinesCreateManyInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PremisesOnTimelinesCreateManyInput.prototype, "assignedAt", void 0);
PremisesOnTimelinesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateManyInput", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateManyInput);
exports.PremisesOnTimelinesCreateManyInput = PremisesOnTimelinesCreateManyInput;
