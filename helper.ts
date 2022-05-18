export const caclcTotalAge = (person1Age: number, person2Age: number) => {
   return person1Age + person2Age;
};

export const unifiedResponse = (payload: any) => {
   return { messge: "Alles jut", payload: payload, statuscode: 200 };
};
