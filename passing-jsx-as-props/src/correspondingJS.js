import React from 'react';

export default function App() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Profile Card Challenge'),
    // First ProfileCard
    React.createElement(
      React.Fragment,
      null,
      React.createElement('h2', null, 'Name: Alice'),
      React.createElement('p', null, 'Age: 30'),
      React.createElement(
        'p',
        null,
        React.createElement(
          'div',
          null,
          React.createElement('strong', null, 'Hi Alice, Have a  wonderful day!')
        )
      ),
      React.createElement(
        'p',
        null,
        React.createElement('p', null, 'Hobbies: Reading, Hiking'),
        React.createElement('button', null, 'Contact')
      )
    ),
    // Second ProfileCard
    React.createElement(
      React.Fragment,
      null,
      React.createElement('h2', null, 'Name: Bob'),
      React.createElement('p', null, 'Age: 20'),
      React.createElement(
        'p',
        null,
        React.createElement(
          'div',
          null,
          React.createElement('strong', null, 'Hi Bob, Have a  wonderful day!')
        )
      ),
      React.createElement(
        'p',
        null,
        React.createElement('p', null, 'Hobbies: Reading, Hiking'),
        React.createElement('button', null, 'Contact')
      )
    )
  );
}
