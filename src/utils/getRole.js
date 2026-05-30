const getRole = user => {
  if (!user) return null;

  if (user?.role === "admin") {
    return "admin";
  }

  if (user?.role === "manager") {
    return "manager";
  }

  return "buyer";
};

export default getRole;