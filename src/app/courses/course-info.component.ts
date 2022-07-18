import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseServise } from "./course.servise";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{

    title = 'Edit'
    
    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private CourseServise: CourseServise){}

    ngOnInit(): void {
        this.course = this.CourseServise.retriveById(+this.activatedRoute.snapshot.paramMap.get('id')!);
    }

    save(): void {
        this.CourseServise.save(this.course);
        //window.location.href='/courses';
        history.back()
    }
}
