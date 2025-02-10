# Debouncing
This is a simple function for "debouncing" a call:

```JS
const getData = (arg) => {
    console.log("GOT DATA" + arg)
}

const debounce = (callback, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
    }, delay);
    };
}

document.addEventListener("click", debounce(() => getData(" and some args"), 2000));
```

## How it works
When `document.addEventListener` is invoked, it *invokes* the `debounce()` function.
This function invocation initializes the single `timer` variable.

The returned function that is defined within `debounce()`, being returned, is provided as the final argument for the `addEventListener` callback. Each time the event listener triggers, it will invoke the returned function, which resets the timer and then initializes the `setTimeout`, which will invoke its own callback if the timer is not reset within the given time.

In the example the callback provided to `debounce` will pass the arguments to the returned timeout callback.