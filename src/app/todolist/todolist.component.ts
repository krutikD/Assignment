import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  // Array to store tasks, each task has a name and a completion status
  taskArray = [{ taskName: 'Wake Up', isCompleted: false }];

  constructor() { }

  ngOnInit(): void {
  }

  // Method to handle form submission
  onSubmit(form: NgForm) {

    // Add the new task 
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false  
    });

    form.reset();  // Reset the form after submission
  }

  // Method to delete a task from taskArray by index
  onDelete(index: number) {

    // Remove the task at the given index from taskArray
    this.taskArray.splice(index, 1);
  }

  
  onCheck(index: number) {
  
    // Toggle the isCompleted status of the task at the given index
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
