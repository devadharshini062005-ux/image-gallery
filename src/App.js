import "./App.css";

const dogs = [
  {
    id: 1,
    title: "Julie's Rabbit Ears",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400",
  },
  {
    id: 2,
    title: "The Innocent Look",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400",
  },
  {
    id: 3,
    title: "Big Eyed Buggy",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400",
  },
  {
    id: 4,
    title: "The Saint Doggo",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400",
  },
  {
    id: 5,
    title: "Big Eyed Buggy",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400",
  },
  {
    id: 6,
    title: "The Innocent Look",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400",
  },
  {
    id: 7,
    title: "The Saint Doggo",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400",
  },
  {
    id: 8,
    title: "Julie's Rabbit Ears",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400",
  },
];

function App() {
  return (
    <div className="gallery">
      {dogs.map((dog) => (
        <div className="card" key={dog.id}>
          <img src={dog.image} alt={dog.title} />
          <h3>{dog.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;