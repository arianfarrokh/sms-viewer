export const formatTransaction = (type: string  , amount: number) => {
  if (amount == null) return { text: "-", color: "gray" };


  if (type === "profit") {
    return { text: `- ${amount}`, color: "#e43333" }; 
  }

  if (type === "deposit") {
    return { text: `+ ${amount}`, color: "#1aa260" }; 
  }

  return { text: amount, color: "gray" };
};
