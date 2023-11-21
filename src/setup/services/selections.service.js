const allSelections = [
  {
    id: 1,
    name: "T-Shirt Homme",
    price: 20,
    category: "Casual",
    image: "/home/select/shirt.png",
  },
  {
    id: 2,
    name: "Sweat",
    price: 30,
    category: "Casual",
    image: "/home/select/sweat.png",
  },
  {
    id: 3,
    name: "Col roulé Étudiant",
    price: 40,
    category: "Casual",
    image: "/home/select/col2.png",
  },
  {
    id: 4,
    name: "Pantalon survêtement Étudiant Culture Campus",
    price: 30,
    category: "Casual",
    image: "/home/select/pentalon.png",
  },
  {
    id: 5,
    name: "Bonnet Étudiant Cultur Campus",
    price: 10,
    category: "permanent",
    image: "/home/select/bonnet.png",
  },
  {
    id: 6,
    name: "Tote bag Cultur Campus",
    price: 10,
    category: "permanent",
    image: "/home/select/bag.png",
  },
  {
    id: 7,
    name: "Short Cultur Campus Héritage",
    price: 35.99,
    category: "Héritage",
    image: "/home/select/short.png",
  },
  {
    id: 8,
    name: "Gourde en aluminium Étudiant Cultur Campus",
    price: 15,
    category: "permanent",
    image: "/home/select/gourde.png",
  },
];

async function getAll() {
  return allSelections;
}

async function getById(id) {
  return allSelections.find((x) => x.id === parseInt(id));
}

export const selectionsService = {
  getAll,
  getById,
};
