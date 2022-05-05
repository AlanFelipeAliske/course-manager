import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseServise } from "./course.servise";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent{

    course: Course | undefined;

    constructor(private activatedRoute: ActivatedRoute, private courseServise: CourseServise){}

    ngOnInit(): void {
        this.course = this.courseServise.retriveById(+this.activatedRoute.snapshot.paramMap.get('id')!);
    }
}