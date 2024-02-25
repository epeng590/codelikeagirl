const favouriteMusicArtists = ["Khruangbin", "Nightmares on Wax", "Paradis"];

const favouriteArtistOne = {
  name: "Khruangbin",
  origin: "America",
  favouriteAlbum: "Universe Smiles Upon You",
  yearReleased: "2016",
};

const favouriteArtistTwo = {
  name: "Nightmares on Wax",
  origin: "England",
  favouriteAlbum: "Smokers Delight",
  yearReleased: "2017",
};

const favouriteArtistThree = {
  name: "Paradis",
  origin: "France",
  favouriteAlbum: "Recto Verso",
  yearReleased: "2016",
};

const favouriteArtistObjects = [
  favouriteArtistOne,
  favouriteArtistTwo,
  favouriteArtistThree,
];

const formatArtistObjectsAsString = (artist) => {
  return `${artist.name} is from ${artist.origin} and my favourite album is ${artist.favouriteAlbum} which was released in ${artist.yearReleased}.`;
};

const formattedArtists = favouriteArtistObjects.map(
  formatArtistObjectsAsString
);
