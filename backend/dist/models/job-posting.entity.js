"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPosting = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let JobPosting = class JobPosting extends base_entity_1.BaseEntity {
    title;
    description;
    location;
    hourly_pay_rate;
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], JobPosting.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], JobPosting.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], JobPosting.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Number }),
    __metadata("design:type", Number)
], JobPosting.prototype, "hourly_pay_rate", void 0);
JobPosting = __decorate([
    (0, typeorm_1.Entity)({ name: 'job-posting' })
], JobPosting);
exports.JobPosting = JobPosting;
//# sourceMappingURL=job-posting.entity.js.map