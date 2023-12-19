import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  form: FormGroup;
  itemList: any = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      item: this.formBuilder.array([]),
    });
  }

  onCheckboxChange(e: { target: { checked: any; value: any } }) {
    const item: FormArray = this.form.get('item') as FormArray;
    if (e.target.checked) {
      const index = item.controls.findIndex((x) => x.value === e.target.value);
      item.removeAt(index);
    } else {
      item.push(new FormControl(e.target.value));
    }
  }

  addToList() {
    const item: FormArray = this.form.get('item') as FormArray;
    //item.push(new FormControl(e.target.value));
    console.log(item);
  }
}
