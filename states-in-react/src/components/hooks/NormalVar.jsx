export const NormalVar = () => {

  let value = 0;

  const handleButtonClick = () => {
    value++;
    console.log(value);
  }
    return (
        <>
            <h1>{value}</h1>
            <button onClick={handleButtonClick}>Click</button>
        </>
    )
}


// Each click prints:

// 1
// 2
// 3
// 4

// So the variable is incrementing.
// ❌ On the UI (screen):
// The <h1>{value}</h1> will NOT update.
// It will always display:
// 0

// Because:

// ✅ React only re-renders when state changes
// ❌ React does NOT track normal variables
// ✔ Variable change → React doesn't care
// ✔ State change → React re-renders UI