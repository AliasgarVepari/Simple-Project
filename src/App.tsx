import ItemList from "./components/ItemList";

const items = [
  {
    id: 1,
    title: "Card 1",
    image: "path/to/image1.jpg",
    description: "Description for item 1",
  },
  {
    id: 2,
    title: "Card 2",
    image: "https://dummyimage.com/600x400/000/fff",
    description: "Description for item 2",
  },
  // Add more items as needed
];

const App = () => {
  return <ItemList items={items} />;
};

export default App;
