import { Component, OnInit,Inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-edit-card-dialog',
  templateUrl: './add-edit-card-dialog.component.html',
  styleUrls: ['./add-edit-card-dialog.component.css']
})
export class AddEditCardDialogComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};


  constructor(private userService: UsersService,public dialogRef: MatDialogRef<AddEditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
   // this.members = this.provider.getMembers();
   // this.epics = this.provider.getEpics();
    //this.loadFromLocal();
    
    this.userService.getUsers().subscribe(
      (data) => {
        console.log('data ==> ', data);
      },
      (err) => {
        console.log('erreur ===> '+ err);
      }
    );
    /*
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];

    */
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
