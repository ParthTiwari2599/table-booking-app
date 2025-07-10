'use client'
import { useEffect, useState } from 'react';

export default function TablesPage() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/tables')

      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setTables(data)
      })
      .catch((error) => {
        console.log("Error fetching tables", error)
      })
  }, [])

  return (
    <div>
      <h1>Available Tables</h1>

      {tables.length === 0 ? (
        <p>No tables found</p>
      ) : (
        <ul>
          {tables.map((table) => (
            <li key={table.id}>
              Table No: {table.number} | Seats: {table.seats} | Status:{" "}
              {table.is_booked ? "Booked" : "Available"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
