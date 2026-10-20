# ShopEase React

A beginner-friendly React e-commerce demo based on the supplied project requirements.

## Features
- Local demo registration, login, logout, and protected checkout routes
- Global light/dark theme saved in localStorage
- FakeStoreAPI product listing and product details
- Case-insensitive search, category filtering, and price sorting
- Cart quantities, remove item, subtotal and total
- Demo checkout and order confirmation
- Responsive layout, loading and error messages

## Run the project
1. Install Node.js (LTS).
2. Extract the ZIP and open the `shopease-react` folder in VS Code.
3. Open a terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown in the terminal.

## Notes
- Internet access is required to load products from FakeStoreAPI.
- Authentication is only a local classroom demo. Passwords are stored in this browser's localStorage and are not secure. Do not use real passwords.
- Cart and theme preferences are saved in localStorage.
- Tailwind is configured and used for a few simple layout classes; most styling is kept in `src/index.css` to keep JSX readable.
