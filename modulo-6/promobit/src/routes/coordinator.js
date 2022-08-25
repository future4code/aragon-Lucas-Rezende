export const goToHome = (navigate) => {
  navigate("/");
};

export const goToMovie = (navigate,idFilme) => {
  navigate(`/filmes/${idFilme}`);
};