import { GithubRepo } from "@/types/GithubRepo";
import { Ref, onMounted, ref } from "vue";

const BASE_URL = "https://api.github.com/orgs";
const ORG_NAME = "Extra-Web-Design-SMK-Muh-1-Klaten-Utara";
const URL = `${BASE_URL}/${ORG_NAME}/repos`

type ReturnType = Ref<Array<GithubRepo> | null>;

export default function(): ReturnType {
    let data: ReturnType = ref(null);

    onMounted(async () => {
        let result = await fetch(URL);
        data.value = await result.json() as Array<GithubRepo>;
    });

    return data;
}