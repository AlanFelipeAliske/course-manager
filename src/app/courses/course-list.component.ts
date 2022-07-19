import { Component, OnInit } from '@angular/core';
import { Course } from './course'
import { CourseServise } from './course.servise';

@Component({
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];
    _courses: Course[] = [];
    _filterBy: string = '';

    constructor(private courseServise: CourseServise) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseServise.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        });
    }

    deleteById(courseId: number): void {
        this.courseServise.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('Erro', err)
        });
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

}