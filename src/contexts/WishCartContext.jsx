import { createContext } from "react";

const WishCactContext = createContext();

const WishCartProvider = WishCactContext.Provider;

export { WishCactContext, WishCartProvider };
