"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Premise = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseStatus_1 = require("../enums/PremiseStatus");
const PremiseCount_1 = require("../resolvers/outputs/PremiseCount");
let Premise = class Premise {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Premise.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Premise.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Premise.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Premise.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseStatus_1.PremiseStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Premise.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Premise.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCount_1.PremiseCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCount_1.PremiseCount)
], Premise.prototype, "_count", void 0);
Premise = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Premise", {
        isAbstract: true
    })
], Premise);
exports.Premise = Premise;
