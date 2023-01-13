import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() task;
  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemNam
  itemDueDate 
  itemPriority
  itemcontact
  itememail
  itempass
  itemadd
  itemadhar
  itemrol
  itemdes
  constructor(public modalCtlr:ModalController, public todoServive:TodoService) { }

  ngOnInit() {
    // this.categories.push('Gold')
    // this.categories.push('Silver')
    // this.categories.push('platinum')
  

    this.itemName = this.task.value.itemName
    this.itemNam = this.task.value.itemNam
    this.itemDueDate = this.task.value.itemDueDate
    this.itemPriority = this.task.value.itemPriority
     this.itemcontact = this.task.value.itemcontact
     this.itememail = this.task.value.itememail
     this.itempass = this.task.value.itempass
     this.itemadd = this.task.value.itemadd
     this.itemadhar = this.task.value.itemadhar
     this.itemdes = this.task.value.itemdes
     this.itemrol = this.task.value.itemrol
     
    // this.categorySelectedCategory = this.task.value.itemCategory
    // console.log(this.task);
    
    
  }
  // selectCategory(index){
  //   this.categorySelectedCategory = this.categories[index]
  //   console.log(this.categorySelectedCategory);
  // }

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  async update(){
    this.newTaskObj = ({itemName:this.itemName,itemNam:this.itemNam, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority })
    let uid = this.task.key
    await this.todoServive.updateTask(uid,this.newTaskObj)
    this.dismis()
       console.log( this.newTaskObj);
  }
}
