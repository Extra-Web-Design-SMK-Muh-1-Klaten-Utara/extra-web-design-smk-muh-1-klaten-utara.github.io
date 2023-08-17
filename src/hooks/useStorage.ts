import { Ref, ref } from "vue";

type State = Ref<string | undefined>;
type SetState = (newState: string) => void;

export default function (key: string, startingState?: string): [State, SetState] {
    const data = ref(localStorage.getItem(key) ?? startingState);

    function setState(newState: string) {
        data.value = newState;
        localStorage.setItem(key, newState);
    }

    return [data, setState];
}