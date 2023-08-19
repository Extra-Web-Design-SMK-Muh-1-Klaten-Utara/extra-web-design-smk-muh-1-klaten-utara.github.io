import { GithubRepo } from "@/types/GithubRepo";
import { Courses } from "@/types/Course";
import upperCaseFirstChar from "./upperCaseFirstChar";

const BASE_URL = "https://extra-web-design-smk-muh-1-klaten-utara.github.io";

type ReturnType = Map<string, Courses>;

// TODO : Should make some sort of dictionary to alias a string to something else
function prettyCourseName(name: string, sep: string): string {
    return name.split(sep)
        .map((value) => upperCaseFirstChar(value))
        .join(' ');
}

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

        // Pop the year and semester from name
        const nameArray = element.name.split('-');
        nameArray.pop();
        nameArray.pop();
        let name = nameArray.join(' ');

        let key = regex[0];
        if (coursesList.has(key)) {
            coursesList.get(key)?.listCourses.push({
                id: element.id.toString(),
                name: prettyCourseName(name, ' '),
                deploy_link: `${BASE_URL}/${element.name}`,
            });

            return;
        }

        let split = key.split("-");
        coursesList.set(key, {
            year: parseInt(split[0]),
            semester: upperCaseFirstChar(split[1]),
            totalCourses: 1,
            listCourses: [
                {
                    id: element.id.toString(),
                    name: prettyCourseName(name, ' '),
                    deploy_link: `${BASE_URL}/${element.name}`,
                },
            ],
        });
    });
    console.log(coursesList);

    return coursesList;
}
