"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

function subscribeTema(callback) {
    window.addEventListener("storage", callback);
    window.addEventListener("tema-change", callback);
    return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener("tema-change", callback);
    };
}

function getTema() {
    return localStorage.getItem("tema") === "gelap";
}

function getTemaServer() {
    return false;
}

export default function TombolTema() {
    const gelap = useSyncExternalStore(subscribeTema, getTema, getTemaServer);

    useEffect(() => {
        if (gelap) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [gelap]);

    function gantiTema() {
        const temaBaru = !gelap;
        if (temaBaru) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("tema", "gelap");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("tema", "terang");
        }
        window.dispatchEvent(new Event("tema-change"));
    }

    return (
        <Button variant="outline" onClick={gantiTema} className="border-white bg-transparent text-white hover:bg-aksen hover:text-white">
            {gelap ? "Mode Terang" : "Mode Gelap"}
        </Button>

    );
}