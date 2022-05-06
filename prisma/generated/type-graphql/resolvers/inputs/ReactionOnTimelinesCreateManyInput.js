"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnTimelinesCreateManyInput = class ReactionOnTimelinesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCreateManyInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesCreateManyInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnTimelinesCreateManyInput.prototype, "createdAt", void 0);
ReactionOnTimelinesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesCreateManyInput", {
        isAbstract: true
    })
], ReactionOnTimelinesCreateManyInput);
exports.ReactionOnTimelinesCreateManyInput = ReactionOnTimelinesCreateManyInput;
