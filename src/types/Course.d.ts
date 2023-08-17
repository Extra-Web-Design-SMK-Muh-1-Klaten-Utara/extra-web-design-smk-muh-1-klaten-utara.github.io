type Course = {
    // Github id of repo
    id: string

    // Github repo name
    name: string,
}

type Courses = {
    name: string,
    totalCourses: number,
    listCourses: Array<Course>,
}

export type { Course, Courses }