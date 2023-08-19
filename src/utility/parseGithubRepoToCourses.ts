import { GithubRepo } from "@/types/GithubRepo";
import { Courses } from "@/types/Course";

const BASE_URL = "https://extra-web-design-smk-muh-1-klaten-utara.github.io";

type ReturnType = Map<string, Courses>;

export default function (repoList: Array<GithubRepo>): ReturnType {
    let coursesList: ReturnType = new Map();

    let a = repoList.filter((element) => {
        // INFO : Maybe should not resort to this regex
        return element.name.search("[0-9]+-(ganjil|genap)") > 0;
    });

    // TODO : Refactor this
    a.forEach((element) => {
        let regex = element.name.match("[0-9]+-ganjil|genap");
        if (regex == undefined || regex == null) {
            return;
        }

        let key = regex[0];
        if (coursesList.has(key)) {
            coursesList.get(key)?.listCourses.push({
                id: element.id.toString(),
                name: element.name,
                deploy_link: `${BASE_URL}/${element.name}`,
            });

            return;
        }

        let split = key.split("-");
        coursesList.set(key, {
            year: parseInt(split[0]),
            semester: split[1],
            totalCourses: 1,
            listCourses: [
                {
                    id: element.id.toString(),
                    name: element.name,
                    deploy_link: `${BASE_URL}/${element.name}`,
                },
            ],
        });
    });
    console.log(coursesList);

    return coursesList;
}
