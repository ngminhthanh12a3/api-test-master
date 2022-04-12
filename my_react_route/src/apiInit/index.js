export const signInInit = ({ body, method, headers, ...props }) => ({
  body: JSON.stringify(body) || null,
  headers: headers || { "Content-Type": "application/json" },
  method: method || "POST",
  credentials: "include",
  ...props,
});

export default signInInit;
