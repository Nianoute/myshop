const allCollections = [
  {
    id: 1,
    name: "Sweatwear",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/collection/Sweatwear.png",
  },
  {
    id: 2,
    name: "Héritage",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/collection/Heritage.png",
  },
  {
    id: 3,
    name: "Casual",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/collection/Casual.png",
  },
];

async function getAll() {
  return allCollections;
}

async function getById(id) {
  return allCollections.find((collection) => collection.id === id);
}

export const collectionService = { getAll, getById };
