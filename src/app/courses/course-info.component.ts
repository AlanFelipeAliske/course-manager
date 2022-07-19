import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseServise } from "./course.servise";

@Component({
    templateUrl: './course-info.component.html',
    styleUrls: ['./course-list.component.css']
})

export class CourseInfoComponent implements OnInit{

    title = 'Edit'
    
    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private CourseServise: CourseServise){}

    ngOnInit(): void {
        this.CourseServise.retriveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)
        });
    }

    save(): void {
        this.CourseServise.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error', err)
        });
        //window.location.href='/courses';
        history.back()
    }
}
