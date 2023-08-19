type Course = {
    // Github id of repo
    id: string

    // Github repo name
    name: string,

    // Link to the deployment
    deploy_link: string,
}

type Courses = {
    semester: string,
    year: number,
    totalCourses: number,
    listCourses: Array<Course>,
}

export type { Course, Courses }