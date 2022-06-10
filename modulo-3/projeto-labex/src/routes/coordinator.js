export const NavigateToAdmin = (navigate) => {
  navigate("/admin");
};

export const NavigateToHome = (navigate) => {
  navigate("/");
};

export const NavigateToDetail = (navigate, id) => {
  navigate(`/admin/trips/${id}`);
};
