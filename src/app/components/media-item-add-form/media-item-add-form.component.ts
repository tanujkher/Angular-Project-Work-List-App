import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-media-item-add-form',
  templateUrl: './media-item-add-form.component.html',
  styleUrls: ['./media-item-add-form.component.css'],
})
export class MediaItemAddFormComponent implements OnInit {
  mediaItemForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.mediaItemForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      Age: new FormControl('', [this.AgeValidator, Validators.required]),
    });
  }

  AgeValidator(control: FormControl) {
    let curr = parseInt(control.value);
    if (isNaN(curr)) {
      return { errorAge: true };
    }
    if (curr >= 1 && curr <= 100) {
      return null;
    }
    return { errorAge: true };
  }

  onSubmit(formValue: any) {
    console.log(formValue);
  }
}
