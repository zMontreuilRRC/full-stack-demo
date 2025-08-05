import { useState } from "react";

/**
 * This is a simple page designed to demonstrate how state and props are handled between components. 
 * It is not included with the broader application.
 */

function StateExamplePage() {
    /**
     * We want to easily update and render these number values as they change.
     * We initialize them in state with a:
     *  Variable Name (countA, countB) that lets them be used as an ordinary READ-ONLY variable.
     *  Setter Method (setCountA, setCountB) that is the ONLY WAY a state variable should be modified.
     *  and an initial value (0, 10).
     * 
     * State should be initialized in the "highest" component that uses it. 
     * That way it can pass it down as props (to the buttons) and use it as needed (in the Total).
     */
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);

  return (
    <>
    <header>
        <h1>State and Props Example</h1>
    </header>
    <main>
      <p>
        This page is a simple example of how state and props are used in React.

        See src/components/pages/Module2Example.tsx
      </p>
        {/* 
            We render two CounterButton components.
            They receive a label, count, and handleClick prop from their parent component.

            Note that handleClick is a callback.
            This way we can re-use components, changing their behaviour with each use if needed.
        */}
      <CounterButton
        label="Increment A"
        count={countA}

        // callback invokes the state set method. 
        // setter methods are the ONLY WAY to update a state variable
        // They can use the current state as an argument ("prev" here)
        // set the new state to the same as the previous, but +1
        handleClick={() => setCountA(prev => prev + 1)}
      />

          {/* Same component as the previous, but different props
            Note that this displays countB and sets it in the handler prop
          */}
      <CounterButton
        label="Decrement B"
        count={countB}
        handleClick={() => setCountB(prev => prev - 1)}
      />

          {/* 
            Render the total of countA and countB. 
            When either state Setter Method is invoked, this total re-renders.   
          */}
      <div>
        Total: {countA + countB}
      </div>
    </main>
    </>
  );
}

// Defining types for props like this makes it easier and cleaner for defining what types a component will accept as props in TS
type CounterButtonProps = {
  label: string;
  count: number;
  handleClick: () => void;
};

// These buttons receive their labels, counts, and handleClick callbacks as props
// props are a single argument object, so they're destructured 
export function CounterButton(
    { label, count, handleClick }: CounterButtonProps
) {
  return (
    // invoke the handleClick callback when the button is clicked
    <button onClick={handleClick}>
        {/* render the props that are received
            Whenever a state set method is invoked, any elements using that state will automatically re-render the relevant HTML (the count text)
        */}
      {label}: {count}
    </button>
  );
}

export default StateExamplePage;