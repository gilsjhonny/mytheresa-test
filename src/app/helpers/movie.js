export const genresToString = (genres) =>
  genres.map((genre) => genre.name).join(", ");

export const getMainGenre = (genres) =>
  genres[0].name.split(" ").join("-").toLowerCase();
