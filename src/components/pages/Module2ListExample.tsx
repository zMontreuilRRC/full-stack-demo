import { useState } from "react";

type Todo = {
    id: number,
    value: string
}

function ListStateExamplePage() {
    const [todos, setTodos] = useState<Todo[]>([
      {id: 1, value: "Take out garbage"},
      {id: 2, value: "Feed pets"},
      {id: 3, value: "Brush teeth"},
      {id: 4, value: "Pay bills"},
    ]);

    const [doneTodos, setDoneTodos] = useState<Todo[]>([]);

  return (
    <>
    <header>
        <h1>State and Props "List" Example</h1>
    </header>
    <main>
      <p>
        This page is a simple example of how state and props are used in React.

        See <i>src/components/pages/Module2ListExample.tsx</i>
      </p>      
      <section>
        <h2>To Do</h2>
        <p>Click on an item to move it to the "done" list.</p>
        <ul>
          {
            // keys should never be initialized during rendering
            // keys should not use element indices
            todos.map((t)=> {
              return(
                <li key={t.id} 
                    onClick={() => {
                        // state cannot update by modifying lists in-place
                        // see https://react.dev/learn/updating-arrays-in-state
                        setTodos(oldList => oldList.filter(filteredT => filteredT.id != t.id));
                        setDoneTodos(oldDones => [...oldDones, t]);
                    }}
                >
                    {t.value}
                </li>
              );
            })
          }
        </ul>
      </section>

      <section>
        <h2>Done</h2>
        <ul>
          {doneTodos.map((d) => {
              return(
              <li key={d.id}>
                {d.value}
              </li>
              );
          })}
        </ul>
      </section>
    </main>
    </>
  );
}

export default ListStateExamplePage;