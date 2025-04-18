"use client";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

type TProvidersProps = {
    children: ReactNode;
};

const Providers = ({ children }: TProvidersProps) => {
    return <Provider store={store}>{children}</Provider>;
};

export default Providers;
