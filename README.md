## Spezifikation Coding-Challenge Warenkorb

Verwendete Technologien: React.js (create-react-app), node.js, git
 
Live-Demo (heroku): https://warenkorb-react.herokuapp.com/ 

### Aufbau:
In /src/App.js befindet sich die Parent-Component. Die weiteren Components befinden sich in src/components/. 
Products.js stellt die Produktauswahl dar und importiert die verfügbaren Produkte als Objekte aus productList.json. Dadurch kann die bestehende Produktauswahl oder die Properties von Produkten leicht überarbeitet werden, bzw. neue Produkte hinzugefügt werden, ohne den eigentlichen Code ändern zu müssen.

Cart.js ist die Warenkorb-Komponente. Sie ist anfangs leer und der User kann über die Warenkorb-Buttons Produkte hinzufügen. Die Quantität kann dann über Input-Felder  im Warenkorb geändert werden und Produkte können durch Klicken des Mülleimer-Icons wieder aus dem Warenkorb entfernt werden.

Discount.js beinhaltet eine Form mit Radio-Buttons, dass dem User erlaubt, zwischen einem absoluten und einem prozentualen Rabatt auszuwählen. Die Werte für die zwei Rabattarten können über die Datei discountSettings.json eingestellt werden.

### Funktionalität:
App.js beinhaltet den State der Applikation, der aus den zwei Objekten „cart“ und „products“ besteht. Cart hat das Array von Objekten cartItems, in dem die Produkte im Warenkorb sind. Zudem hat es die Properties discount, subtotal und total zur Berechnung der Gesamtsumme. Products beinhaltet die Produkt-Objekte.

Die Funktionalität basiert auf den fünf Funktionen addToCart, removeCartItem, updateQuantity, setDiscount und getTotal in App.js, die jeweils per Props an children-components weiter gegeben werden.

Wenn ein User ein auf den Button klickt um ein Produkt zum Warenkorb hinzuzufügen, wird die Funtion addToCart aufgerufen, die zunächst prüft, ob sich das Produkt bereits im Warenkorb befindet. Falls ja, wird die Quantität um 1 erhöht, andernfalls wird das Produkt neu hinzugefügt. Anschließend wird this.setState genutzt um den State upzudaten. Hier wird die Funktion getTotal als callback verwendet um Zwischensummen, Rabatt und Endsumme neu zu berechnen.

Entfernen von Produkten oder Ändern der Menge funktioniert analog. Zunächst wird removeCartItem bzw. updateQuantitty aufgerufen, dann wird die Komponente über this.setState mit getTotal als callback upgedated.

Wenn der User die Auswahl für seinen gewünschten Rabatt getroffen hat, wird setDiscount aufgerufen und der Discount-Typ in State gesetzt.
 
 
 
 
 
 
 ************************************************************************************************



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
