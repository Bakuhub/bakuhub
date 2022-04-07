"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCountAggregate_1 = require("../outputs/ReferenceCountAggregate");
const ReferenceMaxAggregate_1 = require("../outputs/ReferenceMaxAggregate");
const ReferenceMinAggregate_1 = require("../outputs/ReferenceMinAggregate");
let ReferenceGroupBy = class ReferenceGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCountAggregate_1.ReferenceCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceCountAggregate_1.ReferenceCountAggregate)
], ReferenceGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceMinAggregate_1.ReferenceMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceMinAggregate_1.ReferenceMinAggregate)
], ReferenceGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceMaxAggregate_1.ReferenceMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceMaxAggregate_1.ReferenceMaxAggregate)
], ReferenceGroupBy.prototype, "_max", void 0);
ReferenceGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReferenceGroupBy", {
        isAbstract: true
    })
], ReferenceGroupBy);
exports.ReferenceGroupBy = ReferenceGroupBy;
