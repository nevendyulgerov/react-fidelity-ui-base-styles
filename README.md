<!-- Name -->
<h1>
  <a href="https://github.com/nevendyulgerov/react-fidelity-ui-base-styles">React Fidelity UI Base Styles</a>
</h1>

<p>Base styles for React Fidelity UI.</p>


## Installation

Run `npm install react-fidelity-ui-base-styles`

## Configuration

Import dist styles from `react-fidelity-ui-base-styles/dist/style.css` in your root (App) component:

```javascript
import 'react-fidelity-ui-base-styles/dist/style.css';
// or minified
import 'react-fidelity-ui-base-styles/dist/style.min.css';
```

## Customizations

Overwrite any style using your own `config.css` file:

```javascript
// import base styles
import 'react-fidelity-ui-base-styles/dist/style.css';
// customizations
import './config.css'
```

**config.css** should overwrite variables, defined by **react-fidelity-ui-base-style**:

```css
:root {
  /* custom primary color */
  --color-primary: tomato;
  --color-primary--light: pink;
  --color-primary--dark: darkred;

  /* custom secondary color */
  --color-secondary: blue;
  --color-secondary--light: lightblue;
  --color-secondary--dark: darkblue;
}
```
