import { Component, OnInit } from '@angular/core';
import { Course } from './course'
import { CourseServise } from './course.servise';

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];
    _courses: Course[] = [];
    _filterBy: string = '';

    constructor(private courseServise: CourseServise) { }

    ngOnInit(): void {
        this._courses = this.courseServise.retrieveAll();
        this.filteredCourses = this._courses;
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

}