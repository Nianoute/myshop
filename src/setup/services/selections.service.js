const allSelections = [
  {
    id: 1,
    name: "T-Shirt Homme",
    price: 20,
    category: "Casual",
    image: "/home/select/shirt.png",
    codeProduit: "TSHIRT15230",
  },
  {
    id: 2,
    name: "Sweat",
    price: 30,
    category: "Casual",
    image: "/home/select/sweat.png",
    codeProduit: "SWEAT05546",
  },
  {
    id: 3,
    name: "Col roulé Étudiant",
    price: 40,
    category: "Casual",
    image: "/home/select/col2.png",
    codeProduit: "COLR15230",
  },
  {
    id: 4,
    name: "Pantalon survêtement Étudiant Culture Campus",
    price: 30,
    category: "Casual",
    image: "/home/select/pentalon.png",
    codeProduit: "PANT15230",
  },
  {
    id: 5,
    name: "Bonnet Étudiant Cultur Campus",
    price: 10,
    category: "permanent",
    image: "/home/select/bonnet.png",
    codeProduit: "BONN15230",
  },
  {
    id: 6,
    name: "Tote bag Cultur Campus",
    price: 10,
    category: "permanent",
    image: "/home/select/bag.png",
    codeProduit: "TOTE15230",
  },
  {
    id: 7,
    name: "Short Cultur Campus Héritage",
    price: 35.99,
    category: "Héritage",
    image: "/home/select/short.png",
    codeProduit: "SHOR15230",
  },
  {
    id: 8,
    name: "Gourde en aluminium Étudiant Cultur Campus",
    price: 15,
    category: "permanent",
    image: "/home/select/gourde.png",
    codeProduit: "GOUR15230",
  },
];

async function getAll() {
  return allSelections;
}

async function getById(id) {
  return allSelections.find((x) => x.id === parseInt(id));
}

async function getByCategory(category, item) {
  const filteredSelections = allSelections.filter(
    (x) => x.category === category
  );

  if (item) {
    const index = filteredSelections.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      filteredSelections.splice(index, 1);
    }
  }

  if (filteredSelections.length < 2) {
    let otherSelections = allSelections.filter((x) => x.item !== item.id);
    otherSelections = otherSelections.slice(0, 3);

    return otherSelections;
  }
  return filteredSelections;
}

export const selectionsService = {
  getAll,
  getById,
  getByCategory,
};
