import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddEditBoardDialogComponent } from 'src/app/components/add-edit-board-dialog/add-edit-board-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private storage: StorageService,public dialog: MatDialog) { }

  ngOnInit(): void {
    
    console.log('valeur de locol storage ===> '+this.storage.getUserJson()) 
    
  }

  openBoardDialog(): void{
    const dialog = this.dialog.open(AddEditBoardDialogComponent, {
      width: '450px',
      data: {}
    });

    //Send data to create board on show success messages
    dialog.afterClosed().subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
  }


}
