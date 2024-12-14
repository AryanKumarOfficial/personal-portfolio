import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {createJSONStorage, persist} from "zustand/middleware";
import {devtools} from "zustand/middleware";

interface HomeState {
    data: {
        title: string | null;
        description: string | null;
    }
    hydrated: boolean | null;
    loading: boolean;
    error?: Error | null;

    fetchHomeData(): void;

    updateHomeData(data: { title: string, description: string }): Promise<void>;

    setHydrated(): void;
}

const useHome = create<HomeState>()(
    devtools(persist
        (immer((set, get, store) => ({
            data: {
                title: null,
                description:
                    null,
            },
            hydrated: null,
            loading: false,
            setHydrated() {
                set({hydrated: true});
            },
            async fetchHomeData() {
                try {
                    set({loading: true});
                    const res = await fetch("/api/settings/home");
                    const data = await res.json();
                    if (!res.ok) {
                        set({
                            error: new Error(data.error),
                            data: {
                                title: null,
                                description: null,
                            }
                        });
                    }
                    set({
                        data: {
                            title: data.title,
                            description: data.bio,
                        },
                        error: null,
                    });
                } catch (error: any) {
                    console.log("error fetching home data: ", error?.message);
                    set({
                        error: new Error(error?.message),
                        data: {
                            title: null,
                            description: null,
                        }
                    });
                } finally {
                    set({loading: false});
                }
            },
            async updateHomeData(data) {
                try {
                    set({loading: true});
                    const res = await fetch("/api/settings/home", {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(data),
                    });
                    const result = await res.json();
                    if (!res.ok) {
                        set({error: new Error(result.error)});
                    }
                    set({
                        data: {
                            title: result.title,
                            description: result.description,
                        },
                        error: null,
                    });
                } catch (error: any) {
                    console.log("error updating home data: ", error?.message);
                    set({error: new Error(error?.message)});
                } finally {
                    set({loading: false});
                }
            }
        })), {
            name: 'home-storage',
            onRehydrateStorage() {
                return (state) => {
                    state?.setHydrated()
                }
            },
            storage: createJSONStorage(() => localStorage)
        })
    ));

export default useHome;