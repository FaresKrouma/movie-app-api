"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unifiedResponse = exports.caclcTotalAge = void 0;
const caclcTotalAge = (person1Age, person2Age) => {
    return person1Age + person2Age;
};
exports.caclcTotalAge = caclcTotalAge;
const unifiedResponse = (payload) => {
    return { messge: "Alles jut", payload: payload, statuscode: 200 };
};
exports.unifiedResponse = unifiedResponse;
