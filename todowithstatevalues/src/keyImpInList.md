When you render a list:

<ul>
  {items.map(item => (
    <li>{item}</li>
  ))}
</ul>

React sees a list but cannot track each item uniquely.

If the list changes (add/delete/reorder), React may:
re-render the entire list
mix up items
cause UI bugs or performance issues

<ul>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
Now React can:

✔ identify each element uniquely
✔ update only changed items
✔ improve performance
✔ avoid UI glitches

Without keys:

input fields may lose focus
wrong item updates
animations break
performance slows

By default without keys, react give default num as 0 ... to 
eg: adding item on top of list

1. A -> have a text Hi
2. B ->             Bye

If I add C on top, 
1. C -> Hi
2. A -> bye
3. C -> 

Because in diffing phase react sees, key is same 1 but new element C is added there and new item with key 3 txt C is appended in list and for key 1 and 2 only text nodes are updated 