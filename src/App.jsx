import "./App.css";
import { useState } from "react";

const allNotifications = [
  {
    ID: 1,
    Type: "Placement",
    Message: "Amazon Hiring",
    Timestamp: "2026-04-22",
  },
  {
    ID: 2,
    Type: "Result",
    Message: "Mid Sem Results Published",
    Timestamp: "2026-04-21",
  },
  {
    ID: 3,
    Type: "Event",
    Message: "Tech Fest Tomorrow",
    Timestamp: "2026-04-20",
  },
];

function App() {
  const [filter, setFilter] = useState("All");

  const filteredNotifications =
    filter === "All"
      ? allNotifications
      : allNotifications.filter((item) => item.Type === filter);

  return (
    <div className="container">
      <h1>Campus Notifications</h1>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Placement">Placement</option>
        <option value="Result">Result</option>
        <option value="Event">Event</option>
      </select>

      {filteredNotifications.map((item) => (
        <div key={item.ID} className="card">
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <small>{item.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;