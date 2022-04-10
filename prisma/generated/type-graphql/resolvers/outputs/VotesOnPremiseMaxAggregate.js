"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnPremiseMaxAggregate = class VotesOnPremiseMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnPremiseMaxAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnPremiseMaxAggregate.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnPremiseMaxAggregate.prototype, "createdAt", void 0);
VotesOnPremiseMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnPremiseMaxAggregate", {
        isAbstract: true
    })
], VotesOnPremiseMaxAggregate);
exports.VotesOnPremiseMaxAggregate = VotesOnPremiseMaxAggregate;
