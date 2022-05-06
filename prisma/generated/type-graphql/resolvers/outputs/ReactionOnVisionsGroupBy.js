"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCountAggregate_1 = require("../outputs/ReactionOnVisionsCountAggregate");
const ReactionOnVisionsMaxAggregate_1 = require("../outputs/ReactionOnVisionsMaxAggregate");
const ReactionOnVisionsMinAggregate_1 = require("../outputs/ReactionOnVisionsMinAggregate");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnVisionsGroupBy = class ReactionOnVisionsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsGroupBy.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsGroupBy.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnVisionsGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCountAggregate_1.ReactionOnVisionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCountAggregate_1.ReactionOnVisionsCountAggregate)
], ReactionOnVisionsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsMinAggregate_1.ReactionOnVisionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsMinAggregate_1.ReactionOnVisionsMinAggregate)
], ReactionOnVisionsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsMaxAggregate_1.ReactionOnVisionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsMaxAggregate_1.ReactionOnVisionsMaxAggregate)
], ReactionOnVisionsGroupBy.prototype, "_max", void 0);
ReactionOnVisionsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnVisionsGroupBy", {
        isAbstract: true
    })
], ReactionOnVisionsGroupBy);
exports.ReactionOnVisionsGroupBy = ReactionOnVisionsGroupBy;
